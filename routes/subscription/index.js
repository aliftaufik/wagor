<<<<<<< HEAD
// const router = require('express').Router();


// router.get('/:id') //di render ke form subscription
// router.post('/:id') // kalo succes langsung kirim ke home   

// module.exports = router
=======
const subscription = require('express').Router();

const controllers = require('../../controllers');

subscription.get('/', controllers.TransactionController.getSubscription); //di render ke form subscription
subscription.post('/', controllers.TransactionController.postSubscription); // kalo succes langsung kirim ke home

subscription.get('/user/edit', controllers.TransactionController.getUserEdit); // masuk ke form buat isi alamat user
subscription.post('/user/edit', controllers.TransactionController.postUserEdit);
// ada tombol confirm kalau udah langsung kirim sms kemudian kembali ke home

subscription.get('/user/balance', controllers.TransactionController.getUserBalance); // masuk ke form buat nambah balance
subscription.post('/user/balance', controllers.TransactionController.postUserBalance);

module.exports = subscription;
>>>>>>> 5ce928f1664996604dd69b1a7add7be74a7497ce
