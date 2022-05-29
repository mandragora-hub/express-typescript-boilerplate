'use strict'

import { QueryInterface, Sequelize } from 'sequelize'

module.exports = {
  async up(queryInterface: QueryInterface, _Sequelize: Sequelize) {
    await queryInterface.bulkInsert(
      'Workouts',
      [
        {
          name: 'Tommy V',
          mode: 'For Time',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Dead Push-Ups',
          mode: 'AMRAP 10',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Heavy DT',
          mode: '5 Rounds For Time',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface: QueryInterface, _Sequelize: Sequelize) {
    await queryInterface.bulkDelete('Workouts', [], {})
  },
}
