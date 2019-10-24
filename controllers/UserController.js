const models = require('../models');

class UserController {
	static getRegister(req, res) {
		res.render('register');
	}

	static postRegister(req, res) {
		models.User.create(req.body).then(user => {
			req.session.User = {
				id: user.id,
				username: user.username
			};
			res.redirect('/user/edit');
		});
	}

	static getUser(req, res) {
		const data = {};
		models.User.findByPk(req.session.User.id, {
			include: [models.Personal, models.Subscription]
		}).then(user => {
			data.User = user;
			res.render('user', data);
		});
	}

	static getUserEdit(req, res) {
		const data = {};
		models.User.findByPk(req.session.User.id, { include: models.Personal })
			.then(user => {
				data.User = user;
				res.render('user/edit', data);
			})
			.catch(err => {
				res.send(err);
			});
	}

	static postUserEdit(req, res) {
		models.Personal.update(req.body, { where: { UserId: req.session.User.id } })
			.then(count => {
				res.redirect(`${req.baseUrl}`); // biar bisa langsung balik ke Cart atau ke Subscription atau ke user
			})
			.catch(err => {
				res.send(err);
			});
	}

	static getUserBalance(req, res) {
		const data = {};
		models.User.findByPk(req.session.User.id)
			.then(user => {
				data.User = user;
				res.render('user/balance', data);
			})
			.catch(err => {
				res.send(err);
			});
	}

	static postUserBalance(req, res) {
		models.User.update({ balance: req.body.balance }, { where: { id: req.session.User.id } })
			.then(count => {
				res.redirect(`${req.baseUrl}`); // biar bisa langsung balik ke Cart atau ke Subscription atau ke user
			})
			.catch(err => {
				res.send(err);
			});
	}
}

module.exports = UserController;
