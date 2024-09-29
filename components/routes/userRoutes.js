const express = require('express');
const { createUserWithAddress } = require('../controllers/userController');

const router = express.Router();

router.post('/register', createUserWithAddress);

module.exports = router;
