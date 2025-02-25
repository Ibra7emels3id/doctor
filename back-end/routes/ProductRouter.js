const express = require('express');
const { addProduct, getAllProducts, deleteProduct, getProductById, UpdateProductById } = require('../Controllers/product/ProductControll');
const upload = require('../multer/multer');
const AllProducts = express.Router();

AllProducts.post('/product', upload.single('image'), addProduct);
AllProducts.get('/products', getAllProducts);
AllProducts.delete('/product/:id', deleteProduct);
AllProducts.get('/product/:id', getProductById);
AllProducts.put('/product/:id', upload.single('image') , UpdateProductById);





// Export 
module.exports = AllProducts;