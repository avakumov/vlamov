const mongoose = require('mongoose')

const TypeDaySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    durationMins: {
        type: Number,
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true,
        min: 6,
        max: 25
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('TypeDay', TypeDaySchema)
