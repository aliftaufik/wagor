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
		{
			hooks: {
				afterCreate: (transaction, options) => {
					sequelize.models.User.findByPk(transaction.UserId).then(user => {
						sequelize.models.User.Update(
							{
								balance: user.balance - transaction.totalPrice
							},
							{
								where: {
									id: user.id
								}
							}
						);
					});
				}
			},
			sequelize,
			modelName: 'Transaction'
		}
	);
	Transaction.associate = function(models) {
		Transaction.belongsTo(models.User);
		Transaction.belongsToMany(models.Product, { through: models.TransactionProduct });
		// associations can be defined here
	};
	return Transaction;
};
