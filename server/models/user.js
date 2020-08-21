const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: true,
            max: 32
        },
        lastName: {
            type: String,
            trim: true,
            required: true,
            max: 32
        },
        phone: {
          type: String,
          trim: true,
          required: true,
        },
        fullAddress: {
            type: String,
            trim: true,
            required: true,
            max: 200
        },
        ssn: {
          type: String,
          trim: true,
          required: true,
        }

    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
