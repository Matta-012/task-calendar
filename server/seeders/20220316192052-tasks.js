'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        id: 1,
        title: 'Fazer o front',
        description: 'Implementar os requisitos do front-end',
        startDate: new Date('2022-03-15T08:00:00.000Z'),
        endDate: new Date('2011-03-16T23:00:00.000Z'),
      },
      {
        id: 2,
        title: 'Fazer o back',
        description: 'Implementar os requisitos do back-end',
        startDate: new Date('2022-03-16T07:00:00.000Z'),
        endDate: new Date('2011-03-17T23:00:00.000Z'),
      },
      {
        id: 3,
        title: 'Fazer os testes',
        description: 'Implementar os testes do back-end',
        startDate: new Date('2022-03-17T06:00:00.000Z'),
        endDate: new Date('2011-03-18T14:30:00.000Z'),
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
