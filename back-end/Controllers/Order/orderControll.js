const mongoose = require("mongoose");
const Order = require("../../models/order");
require('dotenv').config();
const stripe = require('stripe')('sk_test_51QyKQePpGbpo28hprT457sm7qQlNMAsKEhGdMgDSMEUMUOUAHoyEs7EEU509hTluv6yCBxpPd0tLW4VLkdXthEQl00Eao1WWk6');

// Add Orders 
const AddOrderController = async (req, res, next) => {
    try {
        let order = await Order.findOne({ "user.userId": req.params.id });

        if (order) {
            order = await Order.findOneAndUpdate(
                { "user.userId": req.params.id },
                { $push: { "user.doctors": req.body.user.doctors[0] } },
                { new: true }
            );
            return res.status(200).json({ order, message: 'Order saved successfully' });
        }

        order = new Order(req.body);
        await order.save();
        res.status(201).json({ order, message: 'Order saved successfully' });

    } catch (error) {
        next(error);
    }
};

// Get One Order
const GetOrderController = async (req, res, next) => {
    try {
        const order = await Order.findOne({ "user.userId": req.params.id });
        if (!order) return res.status(200).json({ message: 'Order not found' });
        res.status(200).json(order);
    } catch (error) {
        next(error);
    }
};

// Get All Order 
const GetAllOrdersController = async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
};

// Delete order on User
const DeleteDoctorFromOrder = async (req, res, next) => {
    console.log(req.params.user, req.params.id);
    try {
        const order = await Order.findOneAndUpdate(
            { "user.userId": req.params.user },
            { $pull: { "user.doctors": { _id: req.params.id } } },
            { new: true }
        );

        if (!order) {
            return res.status(404).json({ message: 'Order not found or Doctor not in list' });
        }

        res.status(200).json({ order, message: 'Doctor removed successfully' });
    } catch (error) {
        next(error);
    }
};

// Edit Payment And PayOut Order
const UpdateDoctorStatus = async (req, res, next) => {
    
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: req.body.currency,
        });
        
        let order;
        if (paymentIntent.client_secret) {
            order = await Order.findOneAndUpdate(
                { "user.userId": req.params.user, "user.doctors._id": req.params.id },
                {
                    $set: { "user.doctors.$.payment_Status": 'paid' }
                },
                { new: true }
            );

            if (!order) {
                return res.status(404).json({ message: 'Order not found or Doctor not in list' });
            }
        }
        res.json({ clientSecret: paymentIntent.client_secret , order , message: 'payment successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Confirm Status 
const ConfirmStatus = async (req, res, next) => {
    try {
        let order = await Order.findOneAndUpdate(
            { "user.userId": req.params.user },
            { $set: { "user.doctors.$[doctor].status": req.body.status } },
            { arrayFilters: [{ 'doctor._id': req.params.id }] },
            { new: true }
        );

        if (!order) {
            return res.status(404).json({ message: 'Order not found or Doctor not in list' });
        }

        res.status(200).json({ order, message: 'Doctor status updated successfully' });
    } catch (error) {
        next(error);
    }
};

// Handle Delete User
    const DeleteUserController = async (req, res, next) => {
        try {
            const deletedUser = await Order.findByIdAndDelete(req.params.id);

            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            next(error);
        }
    };




module.exports = {
    AddOrderController,
    GetOrderController,
    DeleteDoctorFromOrder,
    UpdateDoctorStatus,
    GetAllOrdersController,
    ConfirmStatus,
    DeleteUserController
};