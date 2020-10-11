const mongoose = require('mongoose')

const AwardSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
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
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Award', AwardSchema)
