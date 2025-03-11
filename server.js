require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000

//connect database
connectDB();
//middleware
app.use(express.json());

//routes
app.use('/api/todos', require('./routes/todo'));
app.listen(PORT, ()=> console.log('server running on port ${PORT}'))

