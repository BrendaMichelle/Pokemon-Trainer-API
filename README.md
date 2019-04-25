# Pokemon Trainer API

- Basic pokemon trainer API Express app using [Sequelize](http://docs.sequelizejs.com/), [PostgresSQL](https://www.postgresql.org/), [Express.JS](https://expressjs.com/), and [Node.JS](https://nodejs.org/en/).
- There is no front end, so I recommend playing around with this using [Postman](https://www.getpostman.com/).


# 
Assuming you have npm installed, in order to run the app, you must run the command:
```shell
npm init
```
and install all the dependencies using the command :
```shell
npm install
```
Assuming you have postgres and sequelize on your machine, you must then create a pokemon database called "pokemon", create a model called "trainer", and migrate the model to that database. The seeds are already created inside the "seeders" folder. All you need to do is run the seeds in order to populate the table with the test data from the seeders file. [See here](http://docs.sequelizejs.com/manual/migrations.html) for the sequelize terminal commands.


Once you have completed this, you can start the server and visit the trainers routes. Assuming you have [nodemon](https://nodemon.io/) installed, you can simply run the command: 
```shell
npm run start:dev
```

Otherwise, you can run the command: 
```shell
node index.js
```



The port is is configured to 5000 in the index.js file in the root directory. The routes are as follows:

| Action  | Route|
| --------| -----|
| get all  | trainers/   |
| post (create) a trainer  | trainers/   |
| get one trainer  | trainers/:id    |
| put (update) one trainer  | trainers/:id    |
| delete one trainer  | trainers/:id    |
