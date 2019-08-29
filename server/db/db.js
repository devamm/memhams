const Sequelize = require('sequelize');
const {HOST, USER, PASS, ENV} = require('../../config.js')
let dbConfig;


console.log('db environment:',ENV);
dbConfig = ['memhams', USER, PASS, {
    host: HOST,
    port: 5432,
    dialect: 'postgres',
    logging: false
}];


const db = new Sequelize(...dbConfig);

db.authenticate().then(() => {
    console.log('established connection to database!');
    db.sync();
    console.log("Synced database");
}).catch(err => {
    console.log('unable to connect to database:\n', err);
});

module.exports = db;