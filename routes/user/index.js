const user = require('express').Router({ mergeParams: true }); // merge params biar bisa ambil user id

const controllers = require('../../controllers');

user.get('/', controllers.UserController.getUser);

user.get('/edit', controllers.UserController.getUserEdit); // masuk ke form edit untuk lengkapi data diri.
user.post('/edit', controllers.UserController.postUserEdit); // submit data, balik ke halaman user

user.get('/balance', controllers.UserController.getUserBalance); // masuk ke form isi balance
user.post('/balance', controllers.UserController.postUserBalance); // submit data, balik ke halaman user

module.exports = user;
