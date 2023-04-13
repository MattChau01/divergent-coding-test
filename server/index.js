require('dotenv/config');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const express = require('express');
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

app.get('/api/warehouseZones/get', (req, res, next) => {

  const sql = `
    select *
    from "warehouseZones"
  `;

  db.query(sql)
    .then(result => {
      const warehouses = result.rows;
      res.json(warehouses);
    })
    .catch(err => next(err));

});

app.post('/api/warehouseZones', (req, res, next) => {

  const { facilityName } = req.body;

  if (!facilityName) {
    throw new ClientError(400, 'Invalid Input');
  } else {
    const sql = `
    insert into "warehouseZones" ("facilityName")
    values ($1)
  `;

    const params = [facilityName];

    db.query(sql, params)
      .then(result => {
        res.status(201).json(result.rows[0]);
      })
      .catch(err => next(err));
  }

});

app.get('/api/shelves/getAll', (req, res, next) => {

  const sql = `
    select *
    from "shelves"
  `;

  db.query(sql)
    .then(result => {
      const shelves = result.rows;
      res.json(shelves);
    })
    .catch(err => next(err));

});
app.get('/api/shelves/get', (req, res, next) => {

  const { num } = req.body;
  const zoneId = Number(num);

  if (!zoneId) {
    throw new ClientError(400, 'Invalid input');
  } else {

    const sql = `
    select "shelfName"
    from "shelves"
    where "zoneId" = $1
  `;

    const params = [zoneId];

    db.query(sql, params)
      .then(result => {
        const shelves = result.rows;
        res.json(shelves);
      })
      .catch(err => next(err));

  }

});

app.post('/api/shelves', (req, res, next) => {

  const { num, name } = req.body;
  const zoneId = Number(num);
  const shelfName = name;

  if (!zoneId || !shelfName) {
    throw new ClientError(400, 'Invalid input');
  } else {

    const sql = `
    insert into "shelves" ("zoneId", "shelfName")
    values ($1, $2)
    returning*
  `;

    const params = [zoneId, shelfName];

    db.query(sql, params)
      .then(result => {
        const shelves = result.rows[0];
        res.status(201).json(shelves);
      })
      .catch(err => next(err));

  }

});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
