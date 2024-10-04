const sequelize = require('../database/db');
const { DataTypes } = require('sequelize');


    const Products = sequelize.define('Product', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
    });
   
    Products.sync({alter: true})

    module.exports = Products;
