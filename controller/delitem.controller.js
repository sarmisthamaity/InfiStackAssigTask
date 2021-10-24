const itemsModel = require('../models/item.model');

const delItem = async (decoded, req, res, next) => {
    const { itemId, price } = req.body;
    const item = {
        itemId: itemId,
        price: price
    };
    try {
        const deleteItem = await itemsModel
            .deleteOne({ item });
        return res.status(202).send({
            status: 202,
            deleteItem
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            status: 500,
            error: err
        });
    };
};

module.exports = {
    delItem
};