const mongoose = require('mongoose')

const connectDB = async () => {
    // Connect to MongoDB
    try {
        await mongoose.connect('mongodb://ibra7emdev:28lToy6OzNV6s10H@cluster0-shard-00-00.6mql2.mongodb.net:27017,cluster0-shard-00-01.6mql2.mongodb.net:27017,cluster0-shard-00-02.6mql2.mongodb.net:27017/?ssl=true&replicaSet=atlas-y4xwwm-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0');
        console.log("connected to MongoDB");
    } catch (error) {
        console.log("ERROR WITH CONNECTING  MongoDB", error);
    }
}

module.exports = connectDB;