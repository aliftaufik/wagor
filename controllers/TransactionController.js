const models = require('../models');

class TransactionController {
	static getCart(req, res) {
		data.res.render('cart');
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
				const balanceParams = { where: { id: req.body.UserId } };
				const balanceValue = { balance: req.body.initBal - req.body.totalPrice };
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
