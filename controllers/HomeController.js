const models = require('../models');

class HomeController {
	// Home sebelum user login
	static getHome(req, res) {
		res.render('');
	}

	// Home setelah user login
	static getHomeIn(req, res) {
		const data = {};
		models.User.findByPk(req.params.id, { include: models.Transaction })
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
