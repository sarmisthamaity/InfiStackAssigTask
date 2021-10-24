const mongoose = require('mongoose');

const item = new mongoose.Schema({
    itemName: {
        type: String,
    },price: {
        type: Number,
    },Quantity: {
        type: Number,
    },userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
});

const itemsModel = new mongoose.model('items', item);
module.exports = itemsModel;