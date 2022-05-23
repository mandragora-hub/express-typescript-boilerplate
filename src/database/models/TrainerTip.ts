import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript'
import { Workout } from './Workout'

@Table
export class TrainerTip extends Model {
  @Column
  name!: string

  @ForeignKey(() => Workout)
  @Column
  workoutId!: number

  @BelongsTo(() => Workout)
  Workout!: Workout
}
