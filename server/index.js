require('dotenv/config');
const argon2 = require('argon2');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const express = require('express');
const jwt = require('jsonwebtoken');
const pg = require('pg');
const staticMiddleware = require('./static-middleware');

const db = new pg.Pool({
  connectionString: `${process.env.DATABASE_URL}`,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
const jsonMiddleWare = express.json();

app.use(staticMiddleware);
app.use(jsonMiddleWare);

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' });
});

app.post('/api/vendorAccount/signup', (req, res, next) => {
  const { firstName, lastName, username, password } = req.body;

  if (!firstName || !lastName || !username || !password) {
    throw new ClientError(400, 'Invalid Inputs');
  } else {

    argon2
      .hash(password)
      .then(hashedPassword => {
        const sql = `
          insert into "vendorAccount" ("firstName", "lastName", "username", "hashedPassword")
          values ($1, $2, $3, $4)
          returning *
        `;

        const params = [firstName, lastName, username, hashedPassword];

        db.query(sql, params)
          .then(result => {
            res.status(200).json(result.rows[0]);
          })
          .catch(err => next(err));

      })
      .catch(err => {
        console.error(err);
      });

  }

});

app.post('/api/vendorAccount/signin', (req, res, next) => {

  const { username, password } = req.body;

  if (!username || !password) {
    throw new ClientError(401, 'Invalid input');
  } else {
    const sql = `
      select "userId", "hashedPassword"
      from "vendorAccount"
      where "username" = $1
    `;

    const params = [username];

    db.query(sql, params)
      .then(result => {
        const [user] = result.rows;

        if (!user) {
          throw new ClientError(401, 'Invalid login');
        }

        const { userId, hashedPassword } = user;
        return argon2
          .verify(hashedPassword, password)
          .then(isMatching => {
            if (!isMatching) {
              throw new ClientError(401, 'Invalid login');
            } else {

              const payload = { userId, username };
              const token = jwt.sign(payload, process.env.TOKEN_SECRET);

              res.json({
                token,
                user: payload
              });
            }
          });
      })
      .catch(err => next(err));
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
