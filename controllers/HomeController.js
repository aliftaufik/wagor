class HomeController {
	static getHome(req, res) {
		res.render('home');
	}

	static getHomeIn(req, res) {
		res.render('homeIn');
	}
}

module.exports = HomeController;
