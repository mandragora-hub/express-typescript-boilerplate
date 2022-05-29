import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript'
import Workout from './Workout'

@Table
export default class Equipment extends Model {
  @Column
  name!: string

  @ForeignKey(() => Workout)
  @Column
  workoutId!: number

  @BelongsTo(() => Workout)
  Workout!: Workout
}
