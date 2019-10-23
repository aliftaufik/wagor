const router = require('express').Router();
const register = require('./register');
const user = require('./user');
const cart = require('./cart');
const subscription = require('./subscription');

const controller = require('../controllers');

router.get('/', controller.HomeController.getHome); // home langsung ada tombol register sama login. Home bisa nampilin konten yang beda buat user login dan yng blum login.
router.get('/:id', controller.HomeController.getHomeIn); // home buat nampilin produk
router.use('/register', register); // masuk ke halaman register
router.use('/:id/user', user); // masuk ke halaman user
router.use('/:id/cart/', cart); //masuk ke chart transaksi
router.use('/:id/subscription/', subscription);

module.exports = router;
