const router = require('exprss').Router()
const UserController = require('controllers/UserController')

router.get('/register', UserController.add) //peratama masuk
router.post('/register', UserController.create)

router.get('/user/:id/edit', UserController.edit)//update nambah address dll
router.post('/user/:id/edit', UserController.edit)

router.get(':id/cart', UserController.addCart) // masuk ke form isian belanja yang kata isi
router.post(':id/cart', UserController.createCart)

router.



module.exports = router