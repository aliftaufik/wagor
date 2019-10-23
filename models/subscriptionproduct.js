'use strict';
module.exports = (sequelize, DataTypes) => {
	const helpers = require('../helpers');
	class SubscriptionProduct extends sequelize.Sequelize.Model {}
	SubscriptionProduct.init(
		{
			SubscriptionId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					isExists(val) {
						return helpers.fkCheck('Subscription').then(instance => {
							if (!instance) {
								throw new Error(`Cannot find Subscription with id ${val}`);
							}
						});
					}
				}
			},
			ProductId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					isExists(val) {
						return helpers.fkCheck('Subscription').then(instance => {
							if (!instance) {
								throw new Error(`Cannot find Subscription with id ${val}`);
							}
						});
					}
				}
			}
		},
		{ sequelize, modelName: 'SubscriptionProduct' }
	);
	SubscriptionProduct.associate = function(models) {
		SubscriptionProduct.belongsTo(models.Subscription);
		SubscriptionProduct.belongsTo(models.Product);
		// associations can be defined here
	};
	return SubscriptionProduct;
};
