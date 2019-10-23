'use strict';
module.exports = (sequelize, DataTypes) => {
	class Personal extends sequelize.Sequelize.Model {}
	Personal.init(
		{
			UserId: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			fullName: {
				type: DataTypes.STRING,
				// allowNull: { args: false, msg: 'Full name cannot be empty.' },
				allowNull: false,
				validate: {
					notEmpty: { msg: 'Full name cannot be empty.' }
				}
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: { msg: 'Address cannot be empty.' }
				}
			},
			phone: {
				type: DataTypes.STRING,
				unique: { msg: 'Phone number already used by another user.' },
				validate: {
					isNumeric: { msg: 'Phone number should only contain number only.' }
				}
			}
		},
		{ sequelize, modelName: 'Personal' }
	);
	Personal.associate = function(models) {
		Personal.belongsTo(models.User);
		// associations can be defined here
	};
	return Personal;
};
