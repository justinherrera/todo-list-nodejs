const express = require('express')
const express_layouts = require('express-ejs-layouts');
const app = express();
const mongoose = require('mongoose')
const body_parser = require('body-parser')
const moment = require('moment')
require('dotenv/config')

// Assets
app.use(express.static('public'))

// Middleware
app.use(body_parser.json())

// EJS
app.use(express_layouts)
app.set('view engine', 'ejs');

// Form Body Parser
app.use(body_parser.urlencoded({ extended: true }))

// Import Routes
const todos_route = require('./routes/todos')
app.use('/todos', todos_route)

// Routes
app.get('/', (req, res) => {
    res.send('We are home');
})

// MongoDB Connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, poolSize: 5 }, () => {
    console.log('Connected to DB')
})

// Listen to Server
app.listen(3000)