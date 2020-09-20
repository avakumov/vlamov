const mongoose = require('mongoose')

const DayTypeSchema = new mongoose.Schema({
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

module.exports = mongoose.model('DayType', DayTypeSchema)
