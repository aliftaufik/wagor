const router = require('exprss').Router()

router.get('/:id/edit', UserController.edit)//berisi form update nambah address dll
router.post('/:id/edit', UserController.update)

router.get('/:id/balance', UserController.edit)//berisi form update nambah balance
router.post('/:id/balance', UserController.update)

module.exports = router