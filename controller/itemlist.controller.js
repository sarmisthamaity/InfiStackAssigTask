const itemsModel = require('../models/item.model');

const itemList = async (decoded, req, res, next) => {
    try {
        const listOfitem = await itemsModel
            .find({ userId: decoded.userId })
            .populate({ path: 'userId' });
        return res.status(202).send({
            status: 202,
            listOfitem
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            status: 500,
            error: err
        });
    };
};

module.exports = { itemList };