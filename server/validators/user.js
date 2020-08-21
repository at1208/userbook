const { check } = require('express-validator');

exports.createUserValidator = [
  check('firstName')
      .not()
      .isEmpty()
      .withMessage('first name is required'),

    check('lastName')
        .not()
        .isEmpty()
        .withMessage('last name is required'),

    check('fullAddress')
        .not()
        .isEmpty()
        .withMessage('full address is required'),

    check('phone')
          .not()
          .isEmpty()
          .withMessage('phone is required'),

    check('ssn')
          .not()
          .isEmpty()
          .withMessage('SSN is required')

];
