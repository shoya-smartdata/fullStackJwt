const sequelize = require('../database/db');
const { DataTypes } = require('sequelize');

const Products = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  quantity: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM('Man', 'Woman', 'Kids'), 
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
});


Products.sync({ alter: true });

module.exports = Products;
