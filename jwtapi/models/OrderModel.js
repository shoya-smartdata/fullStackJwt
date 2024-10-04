const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const User = require('./userModel');  
const Order = sequelize.define('Order', {
  orderId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  products: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.DECIMAL(10, 2), 
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'shipped'), 
    defaultValue: 'pending',
  },
}, {
  timestamps: true, 
});


Order.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
});

Order.sync({ alter: true });

module.exports = Order;
