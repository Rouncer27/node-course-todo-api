var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: { 
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    age: {
        type: Number,
        required: true
    }
});

module.exports = {User};