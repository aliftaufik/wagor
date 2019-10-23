const cart = require('express').Router();

const controllers = require('../../controllers');

cart.get('/', controllers.TransactionController.getCart); // masuk ke form isian belanja yang kata isi
cart.post('/', controllers.TransactionController.postCart); // disini ada checkout

cart.get('/user/edit', controllers.TransactionController.getUserEdit); // masuk ke form buat isi alamat user
cart.post('/user/edit', controllers.TransactionController.postUserEdit);
// ada tombol confirm kalau udah langsung kirim sms kemudian kembali ke home

cart.get('/user/balance', controllers.TransactionController.getUserBalance); // masuk ke form buat nambah balance
cart.post('/user/balance', controllers.TransactionController.postUserBalance);

// cart.post('/checkout', controllers.TransactionController.postCheckout);

module.exports = cart;
