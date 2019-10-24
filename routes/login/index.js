const login = require('express').Router();

const controllers = require('../../controllers');

login.get('/', controllers.HomeController.getLogin);
login.post('/', controllers.HomeController.postLogin);

module.exports = login;
