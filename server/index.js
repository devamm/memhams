const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');
require('../config.js');

dotenv.config();
const app = express();

const createApp = () => {
    //middleware
    app.use(express.static('public'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //routes
    app.use('/api', require('./api'));

    //default page & error routes

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "..", 'public/index.html'));
    })

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