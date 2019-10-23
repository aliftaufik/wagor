const subscription = require('express').Router();

const controllers = require('../../controllers');

subscription.get('/', controllers.TransactionController.getSubscription); //di render ke form subscription
subscription.post('/', controllers.TransactionController.postSubscription); // kalo succes langsung kirim ke home

subscription.get('/user/edit', controllers.UserController.getUserEdit); // masuk ke form buat isi alamat user
subscription.post('/user/edit', controllers.UserController.postUserEdit);
// ada tombol confirm kalau udah langsung kirim sms kemudian kembali ke home

subscription.get('/user/balance', controllers.UserController.getUserBalance); // masuk ke form buat nambah balance
subscription.post('/user/balance', controllers.UserController.postUserBalance);

module.exports = subscription;
