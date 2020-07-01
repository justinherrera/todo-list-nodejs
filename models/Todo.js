const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    item: {
        type: String,
        require: true
    },
    dueDate: {
        type: Date,
        default: new Date("03/25/2015"),
        required: true
    },
    status: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Todo', TodoSchema)