const  express =  require('express');
const { AddOrderController, GetOrderController, DeleteDoctorFromOrder, UpdateDoctorStatus, GetAllOrdersController, ConfirmStatus, DeleteUserController } = require('../Controllers/Order/orderControll');
const AllOrders = express.Router();


// GET all orders
AllOrders.post('/order/:id' , AddOrderController)
AllOrders.get('/order/:id' , GetOrderController)
AllOrders.get('/orders' , GetAllOrdersController)
AllOrders.delete('/order/:user/:id' , DeleteDoctorFromOrder)
AllOrders.put('/user/doctor/status/:user/:id' , ConfirmStatus)
AllOrders.post('/order-payment/:user/:id' , UpdateDoctorStatus)
AllOrders.delete('/user/:id' , DeleteUserController)








module.exports = AllOrders;
