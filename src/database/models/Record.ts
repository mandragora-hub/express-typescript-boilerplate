import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript'
import Workout from './Workout'

@Table
export default class Record extends Model {
  @Column
  record!: string

  @ForeignKey(() => Workout)
  @Column
  workoutId!: number

  @BelongsTo(() => Workout)
  Workout!: Workout
}
