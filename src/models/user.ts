import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table
  } from 'sequelize-typescript'

@Table({
  timestamps: true
})
export default class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column
  userName: string

  @Column
  email: string
}