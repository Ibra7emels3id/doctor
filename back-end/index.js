const express = require('express')
const connectDB = require('./db/ConnectDB')
const app = express()
const port = process.env.URL || 9000
const path = require('path')
const AllProducts = require('./routes/ProductRouter')
const cors = require('cors');
const connectCloudinary = require('./config/ConnectCloudinary')

// Enable CORS
app.use(cors());

// Connect DB Mongoose 
connectDB()

// connect Cloudinary
connectCloudinary()

// File Path
app.use('/static', express.static(path.join(__dirname, 'public')));


// Use express
app.use(express.json())
app.use(express.static('public'))


// Routes
app.use('/api', AllProducts);


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening on port  http://localhost:${port}`)
})