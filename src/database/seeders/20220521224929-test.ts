'use strict'

import { QueryInterface, Sequelize } from 'sequelize'

module.exports = {
  async up(queryInterface: QueryInterface, _Sequelize: Sequelize) {
    await queryInterface.bulkInsert(
      'Person',
      [
        {
          name: 'John Doe',
          isBetaMember: false,
        },
        {
          name: 'Wagner bros',
          isBetaMember: false,
        },
      ],
      {}
    )
  },

  async down(queryInterface: QueryInterface, _Sequelize: Sequelize) {
    await queryInterface.bulkDelete('Person', [], {})
  },
}
