const { check } = require('express-validator');

exports.signinValidator = [
    check('username')
        .not()
        .isEmpty()
        .withMessage('username is required'),

    check('password')
        .not()
        .isEmpty()
        .withMessage('password is required')
];
