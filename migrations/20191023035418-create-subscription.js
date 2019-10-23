'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Subscriptions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			userId: {
				type: Sequelize.INTEGER
			},
			totalPrice: {
				type: Sequelize.INTEGER
			},
			dailyAllocation: {
				type: Sequelize.INTEGER
			},
			startDate: {
				type: Sequelize.DATEONLY
			},
			endDate: {
				type: Sequelize.DATEONLY
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Subscriptions');
	}
};
