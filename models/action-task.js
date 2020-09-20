const mongoose = require('mongoose')

const actionTaskSchema = new mongoose.Schema({
    action: {
        required: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ActionTask', actionTaskSchema)
