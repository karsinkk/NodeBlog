var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    admin: {
        type: Boolean
    },
    password: String

});

module.exports = mongoose.model('User', userSchema);