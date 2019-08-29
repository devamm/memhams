const dotenv = require("dotenv");
dotenv.config();

const ENV = process.env.NODE_ENV? "HEROKU": 'LOCAL';

const HOST = process.env.DB_HOST ? process.env.DB_HOST : 'localhost';
const USER = process.env.DB_USER ? process.env.DB_USER : 'postgres';
const PASS = process.env.DB_PASS ? process.env.DB_PASS : '';

module.exports = {ENV, HOST, USER, PASS};