const mongoose = require('mongoose')

const MarkTaskSchema = new mongoose.Schema({
    message: {
        required: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('MarkTask', MarkTaskSchema)
