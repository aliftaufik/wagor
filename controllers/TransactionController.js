const models = require('../models');

class TransactionController {
	static getCart(req, res) {
		const data = {};
		data.Order = req.body.order;
		models.User.findByPk(req.session.User.id).then(user => {
			data.User = user;
			res.render('cart', data);
		});
	}

	static postCart(req, res) {
		const transactionParams = {
			UserId: req.session.User.id,
			totalPrice: req.body.totalPrice
		};

		models.Transaction.create(transactionParams)
			.then(trans => {
				const transProductPromises = [];
				for (const product of req.body.order) {
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
				res.redirect('/');
			})
			.catcth(err => {
				res.send(err);
			});
	}

	static getSubscription(req, res) {
		const data = {};
		models.User.findByPk(req.session.User.id, {
			include: models.Subscription,
			order: [[models.Subscription, 'endDate']]
		})
			.then(user => {
				// console.log(user);
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
				res.redirect('/');
			})
			.catcth(err => {
				res.send(err);
			});
	}
}

module.exports = TransactionController;
