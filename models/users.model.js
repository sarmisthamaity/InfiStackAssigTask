const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    profilePicture: {
        type: String,
    },image: {
        type: String
    },
    userName: {
        type: String,
    },email: {
        type: String,
    },Password: {
        type: String,
    },gender: {
        type: String,
    },Dob: {
        type: Date,
    },Qualification: {
        type: String,
    },phonenumber: {
        type: String,
    }
});

const userModel = new mongoose.model('users', userSchema);

module.exports = userModel;