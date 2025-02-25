const cloudinary = require('cloudinary').v2
require('dotenv').config();

const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.NAME_CLOUDINARY,
        api_key: process.env.API_KEY_CLOUDINARY,
        api_secret: process.env.SECRET_KEY_CLOUDINARY,
    });
};

module.exports = connectCloudinary