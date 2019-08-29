const path = require('path');
const express = require('express');

const app = express();

const createApp = () => {
    //include middleware and basic routes here
}

const startListening = () => {
    //start the server
    const port = 8080;
    app.listen(port, () => {
        console.log(`Server started on port ${port}!`);
    });
}

async function startApplication(){
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