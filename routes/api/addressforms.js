const express = require('express')
const router = express.Router()
const addressesController = require('../../controllers/api/addressforms')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', addressesController.index)
router.get('/:id', addressesController.show)
router.post('/', addressesController.create)
router.patch('/:id', addressesController.update)
router.delete('/:id', addressesController.addressDelete)

router.get('/my_address', addressesController.myAddress);
module.exports = router
