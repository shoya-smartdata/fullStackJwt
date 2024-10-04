const { Sequelize } = require('sequelize');
require('dotenv').config(); 

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || "localhost",
    dialect: 'mysql',
   
});

async function connectDatabase() {
    try {
        await connection.authenticate();  
        console.log("Database connected successfully");
    } catch (error) {
        console.error("There was an error connecting to the database:", error);
    }
}

connectDatabase();

module.exports = connection;
