const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const { updateProfile } = require('../../controllers/api/users');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);
// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
// Update user profile
router.put('/:userId/profile', ensureLoggedIn, updateProfile);
// PUT add address
router.put('/:userId/account', usersCtrl.addAddress);
http://localhost:3001/api/users/649de807d2bf8a9030514a37/account




module.exports = router;
