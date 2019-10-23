const router = require('express').Router()
const UserController = require('...controllers/UserController')


router.get('/:id', UserController.editCart) // masuk ke form isian belanja yang kata isi
router.post('/:id', UserController.updateCart) //disini ada checkout

router.get('/:id/ceckout', UserController.checout) // berisi form alamat user yang bisa diupdate dan harus diiisi
                                                    // ada tombol confirm kalau udah langsung kirim sms kemudian kembali ke home

module.exports = router