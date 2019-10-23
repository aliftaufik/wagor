const models = require('../models');

module.exports = modelName => {
	switch (modelName) {
		case 'User':
			return models.User;
		case 'Product':
			return models.Product;
		case 'Subscription':
			return models.Subscription;
	}
};
