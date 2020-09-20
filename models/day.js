const mongoose = require('mongoose')

const DaySchema = new mongoose.Schema({
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ],
    date: {
        type: Date,
        required: true
    },
    dayType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DayType',
        required: true
    }
})

module.exports = mongoose.model('Day', DaySchema)
