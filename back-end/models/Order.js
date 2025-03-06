const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user:{
        userId:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        image:{
            type: String,
            required: true
        },
        username:{
            type: String,
            required: true
        },
        doctors:[
            {
                name:{
                    type: String,
                    required: true
                },
                image:{
                    type: String,
                    required: true
                },
                price:{
                    type: Number,
                    required: true
                },
                specialization:{
                    type: String,
                    required: true
                },
                date:{
                    type: String,
                    required: true
                },
                time:{
                    type: String,
                    required: true
                },
                address:{
                    type: String,
                    required: true
                },
                doctor_id:{
                    type: String,
                    required: true
                },
                duration:{
                    type: String,
                    required: true
                },
                payment_Status:{
                    type: String,
                    default: 'unpaid'
                },
                status:{
                    type: String,
                    default: 'pending'
                },
                new_date: {
                    type: Date,
                    default: Date.now
                }                
            }
        ]
    }
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;