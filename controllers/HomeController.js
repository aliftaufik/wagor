const models = require('../models');

class HomeController {
	static getHome(req, res) {
		res.render('home');
	}

	static getHomeIn(req, res) {
		models.User.findByPk(req.params.id, { include: models.Transaction }).then(user => {});
		res.render('homeIn');
	}
}

module.exports = HomeController;
