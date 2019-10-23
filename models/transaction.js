'use strict';
module.exports = (sequelize, DataTypes) => {
	class Transaction extends sequelize.Sequelize.Model {}
	Transaction.init(
		{
			UserId: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			totalPrice: {
				type: DataTypes.INTEGER,
				allowNull: false
			}
		},
		{ sequelize, modelName: 'Transaction' }
	);
	Transaction.associate = function(models) {
		Transaction.belongsTo(models.User);
		Transaction.belongsToMany(models.Product, { through: models.TransactionProduct });
		// associations can be defined here
	};
	return Transaction;
};
