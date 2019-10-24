'use strict';
module.exports = (sequelize, DataTypes) => {
	class Product extends sequelize.Sequelize.Model {}
	Product.init(
		{
			productName: {
				type: DataTypes.STRING,
				allowNull: { args: false, msg: 'Product name cannot be empty.' },
				unique: { msg: 'This product already registered.' },
				validate: {
					notEmpty: { msg: 'Product name cannot be empty.' }
				}
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: { args: false, msg: 'Price cannot be empty.' }
			},
			webAddress : DataTypes.TEXT
		},
		{ sequelize, modelName: 'Product' }
	);
	Product.associate = function(models) {
		Product.belongsToMany(models.Transaction, { through: models.TransactionProduct });
		Product.belongsToMany(models.Subscription, { through: models.SubscriptionProduct });
		// associations can be defined here
	};
	return Product;
};
