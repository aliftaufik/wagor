const models = require('../models');

class UserController {
	static getRegister(req, res) {
		res.render('register');
	}

	static postRegister(req, res) {
		res.redirect('/');
	}

	static getUser(req, res) {
		const data = {};
		models.User.findByPk(req.params.id, { include: [models.Personal, models.Subscription] }).then(
			user => {
				data.User = user;
				console.log(data);
				res.render('user', data);
			}
		);
	}

	static getUserEdit(req, res) {
		models.User.findByPk(req.params.id)
			.then(user => {
				res.render('user/edit', { user });
			})
			.catch(err => {
				res.send(err);
			});
	}

	static postUserEdit(req, res) {
		models.User.update(req.body, { where: { id: req.params.id } })
			.then(count => {
				res.redirect(`${req.baseUrl}`); // biar bisa langsung balik ke Cart atau ke Subscription atau ke user
			})
			.catch(err => {
				res.send(err);
			});
	}

	static getUserBalance(req, res) {
		models.User.findByPk(req.params.id)
			.then(user => {
				res.render('user/balance');
			})
			.catch(err => {
				res.send(err);
			});
	}

	static postUserBalance(req, res) {
		models.User.update({ balance: req.body.balance }, { where: { id: req.params.id } })
			.then(count => {
				res.redirect(`${req.baseUrl}`); // biar bisa langsung balik ke Cart atau ke Subscription atau ke user
			})
			.catch(err => {
				res.send(err);
			});
	}
}

module.exports = UserController;
