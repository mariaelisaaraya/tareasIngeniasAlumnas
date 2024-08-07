module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 3001,

  /* DATABASE */
  db: {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'mysql1234',
    DB_NAME: process.env.DB_NAME || "trailerflix",
    DB_PORT: process.env.DB_PORT || 3306,
    dialect:  process.env.DB_DIALECT || "mysql",
  }
}