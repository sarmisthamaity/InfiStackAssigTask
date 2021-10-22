require('dotenv').config();
const mongoose = require('mongoose');
// const mongodbUrl = process.env.URL;
const Url = "mongodb+srv://Sarmi:Gouri1234@cluster0.nedm7.mongodb.net/productBasedBackedApp?retryWrites=true&w=majority"

mongoose.connect(Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`database connected securely`);
}).catch((err) => {
    console.log(err);
});