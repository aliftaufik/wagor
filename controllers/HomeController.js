const models = require('../models');
const bcrypt = require('bcrypt');

class HomeController {
	static getLogin(req, res) {
		res.render('login');
	}

	static postLogin(req, res) {
		models.User.findOne({ where: { username: req.body.username } }).then(user => {
			bcrypt.compare(req.body.password, user.password).then(auth => {
				if (auth) {
					req.session.User = {
						id: user.id,
						username: user.username
					};
					res.redirect('/');
				} else {
					req.session.Err = [{ message: 'Wrong email/password' }];
					res.redirect('/login');
				}
			});
		});
	}

	static getHome(req, res) {
		if (req.session.User) {
			HomeController.getHomeIn(req, res);
		} else {
			HomeController.getHomeNew(req, res);
		}
	}

	// Home sebelum user login
	static getHomeNew(req, res) {
		res.render('');
	}

	// Home setelah user login
	static getHomeIn(req, res) {
		const data = {};
		models.User.findByPk(req.session.User.id, {
			include: models.Transaction,
			order: [[models.Transaction, 'createdAt', 'DESC']]
		})
			.then(user => {
				data.User = user;
				return models.Product.findAll();
			})
			.then(products => {
				data.Products = products;
				res.render('home', data);
			})
			.catch(err => {
				res.send(err);
			});
	}
}

module.exports = HomeController;
