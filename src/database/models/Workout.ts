import TrainerTip from './TrainerTip';
import Equipment from './Equipment'
import Exercise from './Exercise'
import Record from './Record'
import { Table, Column, Model, HasMany } from 'sequelize-typescript'

@Table
export default class Workout extends Model {
  @Column
  name!: string

  @Column
  mode!: string

  @HasMany(() => Equipment)
  equipments!: Equipment[]

  @HasMany(() => Exercise)
  exercises!: Exercise[]

  @HasMany(() => TrainerTip)
  trainerTips!: TrainerTip[]

  @HasMany(() => Record)
  records!: Record[]
}
