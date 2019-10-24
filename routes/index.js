const router = require('express').Router();
const register = require('./register');
const user = require('./user');
const cart = require('./cart');
const subscription = require('./subscription');

const controller = require('../controllers');
const middlewares = require('../middlewares');

router.get('/', controller.HomeController.getHome); // home langsung ada tombol register sama login. Home bisa nampilin konten yang beda buat user login dan yng blum login.
router.use('/register', register); // masuk ke halaman register
// router.get('/:id', controller.HomeController.getHomeIn); // home buat nampilin produk
router.use(middlewares.isLogin);
router.use('/user', user); // masuk ke halaman user
router.use('/cart', cart); // masuk ke chart transaksi
router.use('/subscription', subscription); // masuk ke halaman subscription

module.exports = router;
