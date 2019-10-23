'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [
			{
				id: 1,
				username: 'alif',
				password: '123',
				email: 'alif@a.com',
				balance: 0,
				role: 'Customer',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 2,
				username: 'alif2',
				password: '1232',
				email: 'alif2@a.com',
				balance: 0,
				role: 'Customer',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 3,
				username: 'alif3',
				password: '1233',
				email: 'alif3@a.com',
				balance: 0,
				role: 'Customer',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 4,
				username: 'alif4',
				password: '1234',
				email: 'alif4@a.com',
				balance: 0,
				role: 'Customer',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 5,
				username: 'alif5',
				password: '1235',
				email: 'alif5@a.com',
				balance: 0,
				role: 'Customer',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		]);
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	}
};
