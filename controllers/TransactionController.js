class TransactionController {
	static getCart(req, res) {
		res.render('cart');
	}

	static postCart(req, res) {
		res.redirect('/');
	}

	static getUserEdit(req, res) {
		res.render('user/edit');
	}

	static postUserEdit(req, res) {
		res.redirect(`${req.baseUrl}`); // biar bisa langsung balik ke Cart atau ke Subscription
	}

	static getUserBalance(req, res) {
		res.render('user/balance');
	}

	static getUserBalance(req, res) {
		res.redirect(`${req.baseUrl}`);
	}

	// static postCheckout(req, res) {
	// 	res.redirect('checkout');
	// }

	static getSubscription(req, res) {
		res.render('subscription');
	}

	static postSubscription(req, res) {
		res.redirect('/');
	}
}

module.exports = TransactionController;
