require('dotenv').config();
const userModel = require('../models/users.model');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const salt = process.env.ROUNDSALT
const mobileNumber = require('../common/mobile');

const userSignUp = async(req, res) => {
    const files = req.files;
    var datas = req.body
    files.forEach(element => {
        if(element.fieldname == "profilePicture"){
            datas.profilePicture = element.originalname

        } if(element.fieldname == "image"){
            datas.image = element.originalname
        }
    })
    const userSchema = Joi.object({
        userName: Joi.string().required().min(3).max(20),
        email: Joi.string().required(),
        Password: Joi.string().alphanum().min(8).max(20).required(),
        gender: Joi.string().required(),
        Dob: Joi.date().required(),
        Qualification: Joi.string().alphanum().required(),
    });
    const validatedmobileNumber = await mobileNumber.regexPhoneNumber(req.body.phonenumber);
    if(validatedmobileNumber == "invalid"){
        return res.status(300).send({
            status: 300,
            message: 'invalid mobile number'
        });
    }
    const data = {
        userName: datas.userName,
        email: datas.email,
        Password: datas.Password,
        gender: datas.gender,
        Dob: datas.Dob,
        Qualification: datas.Qualification,
    };
    let SchemaValidation = userSchema.validate(data);
    if(SchemaValidation.error){
        return res.status(400).send({
            status: 400,
            error: SchemaValidation.error.details[0].message
        });
    } else{
        SchemaValidation = SchemaValidation.value;
    };
    try{
        const existinguser = await userModel.findOne({$or: [{email: SchemaValidation.email}, {phonenumber: SchemaValidation.phonenumber}]});
        if(existinguser){
            return res.status(202).send({
                status: 202,
                message: 'email or phone number exists'
            });
        } else{
        };
        const hashpassword = await bcrypt.hash(SchemaValidation.Password, 12);
        
        const userData = {
            userName: SchemaValidation.userName,
            email: SchemaValidation.email,
            Password: hashpassword,
            gender: SchemaValidation.gender,
            Dob: SchemaValidation.Dob,
            Qualification: SchemaValidation.Qualification,
            phonenumber: validatedmobileNumber,
            profilePicture: datas.profilePicture,
            image: datas.image
        };

        const saveUserData = await userModel.create(userData);
        return res.status(200).send({
            status: 200,
            message: 'data saved',
            saveUserData
        });
    } catch(err){
        console.log(err);
        return res.status(500).send({
            status: 500,
            message: 'server error , enternal error'
        });
    }
};

module.exports = {userSignUp};