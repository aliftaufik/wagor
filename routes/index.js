const router = require('exprss').Router();
const register = require('./register');
const user = require('./user');
const cart = require('./cart');
const subscription = require('./subscription');


router.get('/') // home langsung ada tombol register sama login
router.use('/register', register);
router.use('/user', user);
router.use('/cart', cart);
router.use('/subscription', subscription);


module.exports = router;