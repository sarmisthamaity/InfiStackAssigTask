const Joi = require('joi');
const userModel = require('../models/users.model');
const Auth = require('../common/token');
const bcrypt = require('bcrypt');

const userLogin = async(req, res) => {
    const dataValidation = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().alphanum().required()
    });
    let dataValidationWithJoi = dataValidation.validate(req.body);
    if(dataValidationWithJoi.error){
        return res.status(400).send({
            status: 400,
            error: dataValidationWithJoi.error
        });
    } else{
        dataValidationWithJoi = dataValidationWithJoi.value;
    };
    try{
        const existUser = await userModel.findOne({email: dataValidationWithJoi.email});
        const checkPassword = await bcrypt.compare(dataValidationWithJoi.password, existUser.Password);
        const token = await Auth.createToken(dataValidationWithJoi);
        if(checkPassword){
            return res.status(200).send({
                status: 200,
                message: 'login succesfull',
                token
            });
        } else {
            return res.status(303).send({
                status: 303,
                message: 'email or password not exists'
            });
        };
    } catch(err){
        console.log(err);
        return res.status(500).send({
            status: 500,
            error: err
        });
    };
};


module.exports = {userLogin};