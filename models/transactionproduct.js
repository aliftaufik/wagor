'use strict';
module.exports = (sequelize, DataTypes) => {
	class TransactionProduct extends sequelize.Sequelize.Model {}
	TransactionProduct.init(
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
			},
			amount: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 1
			}
		},
		{ sequelize, modelName: 'TransactionProduct' }
	);
	TransactionProduct.associate = function(models) {
		TransactionProduct.belongsTo(models.Transaction);
		TransactionProduct.belongsTo(models.Product);
		// associations can be defined here
	};
	return TransactionProduct;
};
