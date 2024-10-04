const express = require('express');

const  productsRoutes = express.Router();

const getAllProducts = require('../Controller/getProducts');

productsRoutes.get('/getAllproducts', getAllProducts)


module.exports = productsRoutes;