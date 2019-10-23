const user = require('express').Router();

const controllers = require('../../controllers');

user.get('/', controllers.UserController.getRoot);

user.get('/edit', controllers.UserController.getEdit); // masuk ke form edit untuk lengkapi data diri.
user.post('/edit', controllers.UserController.postEdit); // submit data, balik ke halaman user

user.get('/balance', controllers.UserController.getBalance); // masuk ke form isi balance
user.post('/balance', controllers.UserController.postBalance); // submit data, balik ke halaman user

module.exports = user;
