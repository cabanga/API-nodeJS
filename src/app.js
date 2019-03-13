"use stricts"


const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const BASE_URL = require('./routes/index');
const productsRoutes = require('./routes/products.routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





app.use('/', BASE_URL);
app.use('/products', productsRoutes);

module.exports = app;