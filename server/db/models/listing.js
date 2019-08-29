const Sequelize = require('sequelize');
const db = require('../db');

const Listing = db.define('listing', {
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }  ,
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    imgurl: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/A_blank_black_picture.jpg/1536px-A_blank_black_picture.jpg'
    },
    sold: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

module.exports = Listing;