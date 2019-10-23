const router = require('express').Router();
// const register = require('./register');
// const user = require('./user');
// const cart = require('./cart');
// const subscription = require('./subscription');


router.get('/', (req, res) => {
    res.render('home')
}) // home langsung ada tombol register sama login
// router.use('/register', register);
// router.use('/user', user);
// router.use('/cart', cart);
// router.use('/subscription', subscription);
router.get('/register', (req, res) => {
    res.render('register')
})

router.get('/subscription', (req, res) => {
    res.render('subscription')
})

module.exports = router;