import { Table, Column, Model, IsEmail } from 'sequelize-typescript'

type Gender = "male" | "female"

@Table
export class Member extends Model {
  @Column
  name!: string

  @Column
  gender!: Gender

  @Column
  dateOfBirth!: Date

  @IsEmail
  @Column
  email!: string

  @Column
  password!: string

}