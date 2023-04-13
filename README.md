# Code template

## :gear: setup
side note: after cloning repository in VS Code, type the following in the terminal. Only need to do this once after repo is cloned.

```shell

`cp .env.example .env`
`sudo service postgresql start` (starts postgreSQL)
`createdb divergentCode`
`pg web --db=divergentCode` (go to http://localhost:8081/ on browser to load database)

  (Go to the .env file and change the parts that say `changeMe` to `divergentCode`.)

```

## :running: running code

```shell
  on another terminal,

 `npm i` (installs all dependencies and packages)
 `npm run db:import` (imports data.sql into database)
 `npm run dev`
```
