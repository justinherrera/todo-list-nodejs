const express = require('express')
const express_layouts = require('express-ejs-layouts');
const app = express();
const mongoose = require('mongoose')
const body_parser =  require('body-parser')
require('dotenv/config')

// Middleware
app.use(body_parser.json())

// Import Routes
const todos_route = require('./routes/todos')
app.use('/todos', todos_route)

// EJS
app.use(express_layouts)
app.set('view engine', 'ejs');

// Home
app.get('/home', (req,res) => {
    res.render('home')
})

// MongoDB Connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB')
})

// Listen to Server
app.listen(3000)