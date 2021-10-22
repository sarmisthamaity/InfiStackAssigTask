const express = require('express');
const app = express();
require('dotenv').config();
require('./connection/connect');

app.use(express.json());

const routes = require('./routes/index');

app.use('/', routes);


app.listen(process.env.PORT, () => {
    console.log(`port number is ${process.env.PORT}`);
});