const getModel = require('./getModel');

module.exports = (modelName, id) => {
	const Model = getModel(modelName);
	return Model.findByPk(id);
};
