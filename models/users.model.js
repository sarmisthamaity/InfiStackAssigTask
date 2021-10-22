const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    // ProfilePicture: {
    //     type: String,
    //     required: true
    // }
    UserName: {
        type: String,
        required: true
    },email: {
        type: String,
        required: true
    },Password: {
        type: String,
        required: true
    },gender: {
        type: String,
        required: true
    },Dob: {
        type: Date,
        required: true
    },Qualification: {
        type: String,
        required: true
    },phonenumber: {
        type: String,
        required: true
    }
});

const userModel = new mongoose.model('users', userSchema);

module.exports = userModel;