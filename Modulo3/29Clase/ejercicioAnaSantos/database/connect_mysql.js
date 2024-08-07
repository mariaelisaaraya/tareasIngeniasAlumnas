const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const db = {
    HOST: process.env.DB_HOST || 'localhost',
    USER: process.env.DB_USER || 'root',
    PASSWORD: process.env.DB_PASS || 'mysql1234',
    DB: process.env.DB_NAME || 'trailerflix',
    DB_PORT: process.env.DB_PORT || 3306,
    DIALECT: process.env.DB_DIALECT || 'mysql',
}

const sequelize = new Sequelize(
    db.DB, 
    db.USER, 
    db.PASSWORD, 
    {
        host: db.HOST,
        dialect: db.DIALECT
    }
);

async function authenticate() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the db: ', error);
    }
}

async function closeConnection() {
    try {
        await sequelize.close();
        console.log('Connection has been closed successfully.');
    } catch (error) {
        console.error('Unable to close the connection to the db: ', error);
    }
}

authenticate()

module.exports = { authenticate, closeConnection };