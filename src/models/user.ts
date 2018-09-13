import * as Sequelize from 'sequelize'

interface UserAttributes {
  id: string
  userName: string
  createdAt: Date
  updatedAt: Date
}

export default (sequalize: Sequelize.Sequelize) => {
  const UserSchema = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    userName: { type: Sequelize.STRING, allowNull: false }
  }
  return sequalize.define('User', UserSchema)
}