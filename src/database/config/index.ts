import { SequelizeOptions } from 'sequelize-typescript'

const development: SequelizeOptions = {
  username: 'root',
  password: '',
  database: 'express-typescript-boilerplate-database-dev',
  dialect: 'sqlite',
  storage: ':memory:',
  dialectOptions: {
    bigNumberStrings: true,
  },
}

const test: SequelizeOptions = {
  username: process.env.CI_DB_USERNAME,
  password: process.env.CI_DB_PASSWORD,
  database: process.env.CI_DB_NAME,
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    bigNumberStrings: true,
  },
}

const production: SequelizeOptions = {
  username: process.env.PROD_DB_USERNAME,
  password: process.env.PROD_DB_PASSWORD,
  database: process.env.PROD_DB_NAME,
  host: process.env.PROD_DB_HOSTNAME,
  // port: number(process.env.PROD_DB_PORT),
  dialect: 'mysql',
  dialectOptions: {
    bigNumberStrings: true,
    // ssl: {
    //   ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt')
    // }
  },
}

export default {
  development,
  test,
  production,
}
