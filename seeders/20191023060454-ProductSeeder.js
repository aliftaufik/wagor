'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Products', [
			{
				productName: 'Bakwan',
				price: 1000,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				productName: 'Bakwan2',
				price: 2000,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				productName: 'Bakwan3',
				price: 3000,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				productName: 'Bakwan4',
				price: 3000,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				productName: 'Bakwan5',
				price: 3000,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				productName: 'Bakwan6',
				price: 3000,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				productName: 'Bakwan7',
				price: 3000,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				productName: 'Bakwan8',
				price: 3000,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				productName: 'Bakwan9',
				price: 3000,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				productName: 'Bakwan10',
				price: 3000,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				productName: 'Bakwan11',
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
