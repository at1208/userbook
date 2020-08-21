const express = require('express');
const router = express.Router();
const { createUser, allUsers  } = require('../controllers/userController');

const { runValidation } = require('../validators');
const {
    createUserValidator
} = require('../validators/user');

router.post('/create-user', createUserValidator, runValidation, createUser);
router.get('/all-user',allUsers);

module.exports = router;
