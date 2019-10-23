'use strict';
module.exports = (sequelize, DataTypes) => {
	class User extends sequelize.Sequelize.Model {}
	User.init(
		{
			username: {
				type: DataTypes.STRING,
				allowNull: { args: false, msg: 'Username cannot be empty.' },
				unique: { msg: 'This username is already taken.' },
				validate: {
					isAlphanumeric: { msg: 'Username can only contain alphanumerics.' },
					notEmpty: { msg: 'Username cannot be empty.' }
				}
			},
			password: {
				type: DataTypes.STRING,
				allowNull: { args: false, msg: 'Password cannot be empty.' },
				validate: {
					notEmpty: { msg: 'Password cannot be empty.' },
					len: { args: [6, 25], msg: 'Minimum password length must be 6.' }
				}
			},
			email: {
				type: DataTypes.STRING,
				allowNull: { args: false, msg: 'Email cannot be empty.' },
				unique: { msg: 'Someone has sign up using this email.' },
				validate: {
					isEmail: { msg: 'Invalid email syntax.' },
					notEmpty: { msg: 'Email cannot be empty.' }
				}
			},
			balance: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0
			},
			role: {
				type: DataTypes.STRING,
				defaultValue: 'Customer',
				validate: {
					isIn: { args: ['Customer', 'Admin'], msg: 'Invalid user role.' }
				}
			}
		},
		{ sequelize, modelName: 'User' }
	);
	User.associate = function(models) {
		User.hasMany(models.Subscription);
		// associations can be defined here
	};
	return User;
};
