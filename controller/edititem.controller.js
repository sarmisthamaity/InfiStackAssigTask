const itemsModel = require('../models/item.model');

const editItem = async(req, res) => {
    const { itemId, price, Quantity } = req.body;
    try{
        const editDatas = {
            price: price,
            Quantity: Quantity
        };
        const updateItem = await itemsModel.findOneAndUpdate({_id: itemId}, editDatas);
        return res.status(202).send({
            status: 202,
            updateItem
        });
    }catch(err){
        console.log(err);
        return res.status(500).send({
            status: 500,
            error: err
        });
    };
};


module.exports = {editItem};