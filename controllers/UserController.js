class UserController {
	static getRegister(req, res) {
		res.render('register');
	}

	static postRegister(req, res) {
		res.redirect('/');
	}

	getRoot(req, res) {
		res.render('user');
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

	static getBalance(req, res) {
		res.redirect(`/user/${req.params.id}`);
	}
}

module.exports = UserController;
