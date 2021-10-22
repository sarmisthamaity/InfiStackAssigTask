const mongoose = require('mongoose');

const item = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },price: {
        type: Number,
        required: true
    },Quantity: {
        type: Number,
        required: true
    },userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
});


const itemsModel = new mongoose.model('items', item);

module.exports = itemsModel;