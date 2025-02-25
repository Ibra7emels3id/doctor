const Product = require("../../models/Product");
const cloudinary = require("cloudinary").v2;

// Add New Item
const addProduct = async (req, res, next) => {
    try {
        // Change Length Password
        if (req.body.password.length < 8) {
            res.status(403).json({ message: "Password too short" });
        }
        // Set Image Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path)
        // Create new product with image
        const product = new Product({
            ...req.body,
            image: result.secure_url
        });
        // Save product to MongoDB
        await product.save();
        res.status(201).json({ message: "Product added successfully", product });
    } catch (error) {
        next(error);
    }
};

// delete product
const deleteProduct = async (req, res, next) => {
    try {
        // Find and delete product from MongoDB
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        next(error);
    }
};

// Get All Items
const getAllProducts = async (req, res, next) => {
    try {
        // Get all products from MongoDB
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        next(error);
    }
};

// Get Single Item
const getProductById = async (req, res, next) => {
    try {
        // Find and return product by ID from MongoDB
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (error) {
        next(error);
    }
};

// Update Item
const UpdateProductById = async (req, res, next) => {
    console.log(req.file);
    try {
        let image = req?.body?.image
        if (req.file) {
            const ImageUrl = await cloudinary.uploader.upload(req.file.path)
            image = ImageUrl.secure_url
        }
        // Find and update product by ID from MongoDB
        const product = await Product.findByIdAndUpdate(req.params.id, {
            ...req.body,
            image
        }, { new: true });
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json({ product, message: "Product Update Successfully" });
    } catch (error) {
        next(error);
    }
};









// export ALl products
module.exports = {
    addProduct,
    getAllProducts,
    deleteProduct,
    getProductById,
    UpdateProductById

}