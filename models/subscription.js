'use strict';
const helpers = require('../helpers');
module.exports = (sequelize, DataTypes) => {
	class Subscription extends sequelize.Sequelize.Model {
		expiring() {
			const remaining = helpers.convertMsToDays(new Date(this.endDate) - new Date());
			return remaining == 0 ? 'Expired' : remaining + ` day${remaining > 1 ? 's' : ''}`;
		}
	}
	Subscription.init(
		{
			UserId: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			totalPrice: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			dailyAllocation: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			startDate: {
				type: DataTypes.DATEONLY,
				allowNull: false,
				defaultValue: new Date()
			},
			endDate: {
				type: DataTypes.DATEONLY,
				allowNull: false
			}
		},
		{
			hooks: {
				afterCreate: (subscription, options) => {
					sequelize.models.User.findByPk(subscription.UserId).then(user => {
						sequelize.models.User.Update(
							{
								balance: user.balance - subscription.totalPrice
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
			modelName: 'Subscription'
		}
	);
	Subscription.associate = function(models) {
		Subscription.belongsTo(models.User);
		Subscription.belongsToMany(models.Product, { through: models.SubscriptionProduct });
		// associations can be defined here
	};
	return Subscription;
};
