import * as Sequelize from 'sequelize'

const sequelize = new Sequelize(
  'graphqltutdb',
  'graphqltut',
  'password',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
)

const db = {
  User: sequelize.import('./user'),
  sequelize: sequelize
}

export default db