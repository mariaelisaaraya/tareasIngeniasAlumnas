const {Sequelize} = require('sequelize');
// const {database} = require('../config'); //no funciona la importación
// ENVIRONMENT
const dotenv = require('dotenv');
dotenv.config()

const database ={
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASS: process.env.DB_PASS || '1234',
  DB_NAME: process.env.DB_NAME || "trailerflix",
  DB_PORT: process.env.DB_PORT || "3306",
  dialect:  process.env.DB_DIALECT || "mysql",
}

const sequelize = new Sequelize(database.DB_NAME, database.DB_USER, database.DB_PASS, {
    host: database.DB_HOST,
    dialect: database.dialect
});

async function authenticate(){
    try{
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente');
    }catch(error){
        console.error('Error al conectar a la base de datos: ', error);
    }
}

async function closeConnection(){
    try{
        await sequelize.close();
        console.log('Conexión cerrada correctamente');
    }catch(error){
        console.error('Error al cerrar la conexión: ', error);
    }
}

authenticate()
//closeConnectionn() //Si llamo a las dos funciones me sale el error "Unable to connect to the database:  Error: pool is draining and cannot accept work"

module.exports = {authenticate, closeConnection};

//Otra forma:

// sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
//   }).catch((error) => {
//     console.error('Unable to connect to the database: ', error);
//   });
  
//   sequelize.close().then(() => {
//     console.log('Connection has been closed successfully.');
//   }).catch((error) => {
//     console.error('Unable to close the connection to the database: ', error);
//   });
  
//   module.exports = sequelize;
