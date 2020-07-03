const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        default: 'Active',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Todo', TodoSchema)