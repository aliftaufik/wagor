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
		models.User.findAll({ include: models.Subscription }).then(user => {
			data.User = user;
			res.render('user', data);
		});
	}

	static getEdit(req, res) {
		res.render('user/edit');
	}

	static postEdit(req, res) {
		res.redirect(`/user/${req.params.id}`);
	}

	static getBalance(req, res) {
		res.render('user/balance');
	}

	static postBalance(req, res) {
		res.redirect(`/user/${req.params.id}`);
	}
}

module.exports = UserController;


