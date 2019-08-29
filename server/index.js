const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');
require('../config.js');

dotenv.config();
const app = express();

const createApp = () => {
    //include middleware and routers here here
    app.use(express.static('public'));

    app.use((err, req, res, next) => {
        console.error(err);
        res.status(err.status || 500).send(err.message || 'Internal Server Error');
    })

}

const startListening = () => {
    //start the server
    const port = 8080;
    app.listen(port, () => {
        console.log(`Server started on port ${port}!`);
    });
}

const syncDb = () => db.sync();

async function startApplication(){
    await syncDb();
    await createApp();
    await startListening();
}

//start application here
try{
    startApplication();
} catch(e){
    console.log("~~~~~\nError encountered\n~~~~~\n", e);
}

module.exports = app;