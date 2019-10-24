const routes = require('express').Router();
const register = require('./register');
const login = require('./login');
const user = require('./user');
const cart = require('./cart');
const subscription = require('./subscription');

const controller = require('../controllers');
const middlewares = require('../middlewares');

routes.get('/', controller.HomeController.getHome); // home langsung ada tombol register sama login. Home bisa nampilin konten yang beda buat user login dan yng blum login.

routes.use('/register', register); // masuk ke halaman register
routes.use('/login', login);

routes.use(middlewares.isLogin);
routes.use('/user', user); // masuk ke halaman user
routes.use('/cart', cart); // masuk ke chart transaksi
routes.use('/subscription', subscription); // masuk ke halaman subscription

module.exports = routes;
