'use strict';
module.exports = (sequelize, DataTypes) => {
	class Subscription extends sequelize.Sequelize.Model {}
	Subscription.init(
		{
			userId: {
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
		{ sequelize, modelName: 'Subscription' }
	);
	Subscription.associate = function(models) {
		Subscription.belongsTo(models.User);
		// associations can be defined here
	};
	return Subscription;
};
