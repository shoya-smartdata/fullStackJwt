const Products = require('../models/productsModel')


const getAllProducts = async (req, res)=>{

 try {
    const data = await Products.findAll();
    res.status(201).json({
       
        data
    })
 } catch (error) {
    res.status(404).json({
        error: "error hai "
    })
 }


}

module.exports = getAllProducts;