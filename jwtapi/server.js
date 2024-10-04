const express = require('express');
const app = express();

const connection = require('./database/db');
require('dotenv').config();
const cors = require('cors');

app.use(cors());


const bodyParser = require('body-parser');
app.use(bodyParser.json());

const userRoutes = require('./Routes/userRoutes');
const productsRoutes = require('./Routes/productsRoute');


app.use('/api', userRoutes)
app.use('/api/products', productsRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`your server is running successfully at port ${process.env.PORT}`); 
});