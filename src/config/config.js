const development = {
    "username":  process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  }
  const test = {
    "username":  process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  }
  const production = {
     "username":  process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  }


module.exports = {
  development,
  test,
  production,
}