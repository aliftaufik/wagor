const models = require('../models');

class TransactionController {
	static getCart(req, res) {
		const data = {};
		data.products = req.body.products;
		models.User.findByPk(req.params.id).then(user => {
			data.User = user;
			models.data.res.render('cart', data);
		});
	}

	static postCart(req, res) {
		const transactionParams = {
			UserId: req.body.userId,
			totalPrice: req.body.totalPrice
		};

		models.Transaction.create(transactionParams)
			.then(trans => {
				const transProductPromises = [];
				for (const product of req.body.products) {
					const transProductParams = {
						TransactionId: trans.id,
						ProductId: product.id,
						amount: product.amount
					};
					transProductPromises.push(models.TransactionProducts.create(transProductParams));
				}
				return Promise.all(transProductPromises);
			})
			.then(transProducts => {
				const balanceValue = { balance: req.body.initBal - req.body.totalPrice };
				const balanceParams = { where: { id: req.body.userId } };
				return models.User.update(balanceValue, balanceParams);
			})
			.then(count => {
				res.redirect('/');
			})
			.catcth(err => {
				res.send(err);
			});
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

	static getSubscription(req, res) {
		const data = {};
		models.User.findByPk(req.params.id, { include: models.Subscription })
			.then(user => {
				data.User = user;
				return models.Product.findAll();
			})
			.then(products => {
				data.Products = products;
				res.render('subscription', data);
			})
			.catch(err => {
				res.send(err);
			});
	}

	static postSubscription(req, res) {
		const subscriptionParams = {
			UserId: req.body.userId,
			totalPrice: req.body.totalPrice,
			dailyAllocation: req.body.dailyAllocation,
			startDate: req.body.startDate,
			endDate: req.body.endDate
		};

		// bikin Subscription baru, kalo sukses bikin SubscriptionProduct buat tiap produk yang dibeli.
		// Setelah sukses semua baru update balance-nya User.
		models.Subscription.create(subscriptionParams)
			.then(sub => {
				const subProductPromises = [];
				for (const product of req.body.products) {
					const subProductParams = {
						SubscriptionId: sub.id,
						ProductId: product.id,
						amount: product.amount
					};
					subProductPromises.push(models.SubscriptionProduct.create(subProductParams));
				}
				return Promise.all(subProductPromises);
			})
			.then(subProducts => {
				const balanceValue = { balance: req.body.initBal - req.body.totalPrice };
				const balanceParams = { where: { id: req.body.userId } };
				return models.User.update(balanceValue, balanceParams);
			})
			.then(count => {
				res.redirect('/');
			})
			.catcth(err => {
				res.send(err);
			});
	}
}

module.exports = TransactionController;
