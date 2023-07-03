const express = require('express');
const router = express.Router();
const addressCtrl = require('../../controllers/api/AddressService');

// All paths start with '/addresses'

// GET /addresses
router.get('/', addressCtrl.getAddresses);

// GET /addresses/:id
router.get('/:id', addressCtrl.getAddressById);

// POST /addresses
router.post('/', addressCtrl.createAddress);

// PUT /addresses/:id
router.put('/:id', addressCtrl.updateAddress);

// DELETE /addresses/:id
router.delete('/:id', addressCtrl.deleteAddress);

module.exports = router;