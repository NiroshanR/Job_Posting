const mongoose = require('mongoose');


// Creating schema for users
const User = new mongoose.Schema( {
    Name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    Mobile: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('user', User);