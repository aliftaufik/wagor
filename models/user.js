'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
	class User extends sequelize.Sequelize.Model {
		get balanceInRp() {
			const strBalance = String(this.balance)
				.split('')
				.reverse()
				.reduce((arr, char, index) => {
					if (index % 3 == 0 && index != 0) arr.push('.');
					arr.push(char);
					return arr;
				}, [])
				.reverse()
				.join('');
			return `Rp. ${strBalance},00`;
		}
	}
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
		{
			hooks: {
				beforeCreate: (user, options) => {
					return bcrypt
						.genSalt(10)
						.then(salt => {
							return bcrypt.hash(user.password, salt);
						})
						.then(hash => {
							user.password = hash;
						});
				}
			},
			sequelize,
			modelName: 'User'
		}
	);
	User.associate = function(models) {
		User.hasMany(models.Subscription);
		User.hasMany(models.Transaction);
		User.hasOne(models.Personal);
		// associations can be defined here
	};
	return User;
};
