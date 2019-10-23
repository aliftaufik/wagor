const models = require('../models');

class HomeController {
	static getHome(req, res) {
		res.render('home');
	}

	static getHomeIn(req, res) {
		const data = {};
		models.User.findByPk(req.params.id, { include: models.Transaction })
			.then(user => {
				data.User = user;
				return models.Product.findAll();
			})
			.then(products => {
				data.Products = products;
				res.render('homeIn', data);
			})
			.catch(err => {
				res.send(err);
			});
	}
}

module.exports = HomeController;
