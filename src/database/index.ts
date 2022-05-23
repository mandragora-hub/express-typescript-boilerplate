import { Sequelize } from 'sequelize-typescript'
import config from './config'
const env =  process.env.NODE_ENV || 'development';

type ConfigKey = keyof typeof config;
const configEnvironment: ConfigKey = env;

const sequelize = new Sequelize(config[configEnvironment])
sequelize.addModels([__dirname + '/models']);

// const sequelize = new Sequelize({
//   database: 'some_db',
//   dialect: 'sqlite',
//   username: 'root',
//   password: '',
//   storage: ':memory:',
//   models: ['/models'] // or [Player, Team],
// })

export default sequelize