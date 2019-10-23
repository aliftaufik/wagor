'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Products', [
			{
				id: 1,
				productName: 'Bakwan',
				price: 1000,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 2,
				productName: 'Bakwan2',
				price: 2000,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 3,
				productName: 'Bakwan3',
				price: 3000,
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
