const Sequelize = require('sequelize');

let dbConfig;

if(ENV == 'prod'){
    //configure heroku db connection here
    console.log("connecting to Heroku db");
}else {
    //local db connection
    console.log('connecting to local DB');
    dbConfig = ['memhams', "", "", {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',
        logging: 'false'
    }]
}

const db = new Sequelize(...dbConfig);

db.authenticate().then(() => {
    console.log('established connection to database!');
    db.sync();
    console.log("Synced database");
}).catch(err => {
    console.log('unable to connect to database:\n', err);
});

module.exports = db;