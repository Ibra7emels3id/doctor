const  mongoose  = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    reviews: {
        type: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                },
                comment: String,
                rating: Number,
            },
        ],
        default: [],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    address1: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
        required: true,
    },
    appointments:{
        type: [
            {
                date: String,
                time: [
                    
                ],
            }
        ],
        default: [],
    }
})
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;