const itemsModel = require('../models/item.model');

const itemList = async(req, res) => {
    try{
        
    } catch(err){
        console.log(err);
        return res.status(500).send({
            status: 500,
            error: err
        });
    };
};