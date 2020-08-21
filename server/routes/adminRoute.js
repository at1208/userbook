const express = require('express');
const router = express.Router();
const { signin,createAdmin  } = require('../controllers/adminController');


const { runValidation } = require('../validators');
const { signinValidator } = require('../validators/admin')

router.post('/signin', signinValidator, runValidation, signin);
router.post('/create-admin', createAdmin);

module.exports = router;
