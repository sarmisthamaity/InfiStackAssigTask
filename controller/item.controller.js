const itemsModel = require('../models/item.model');
const Joi = require('joi');

const createItem = async (decoded, req, res, next) => {
    const schemaValidate = Joi.object({
        itemName: Joi.string().required(),
        price: Joi.number().required(),
        Quantity: Joi.number().required(),
        userId: Joi.string()
    });

    let SchemaValidation = schemaValidate.validate(req.body);
    if (SchemaValidation.error) {
        return res.status(300).send({
            status: 300,
            message: SchemaValidation.error
        });
    } else {
        SchemaValidation = SchemaValidation.value;
    };
    try {
        const searchItems = await itemsModel.findOne({
            $and: [{ userId: decoded.userId },
            { itemName: SchemaValidation.itemName }]
        });
        if (searchItems) {
            return res.status(400).send({
                status: 400,
                message: 'this item is already exists'
            });
        } else {

        };
        const items = {
            itemName: SchemaValidation.itemName,
            price: SchemaValidation.price,
            Quantity: SchemaValidation.Quantity,
            userId: decoded.userId
        };
        const saveItems = await itemsModel.create(items);
        return res.status(202).send({
            status: 202,
            saveItems,
            message: 'item saved in database'
        });

    } catch (err) {
        console.log(err);
        return res.status(500).send({
            status: 500,
            messageError: err
        });
    };
};

module.exports = {
    createItem
};