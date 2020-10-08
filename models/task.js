const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    description: {
        type: String,
        max: 2550
    },
    super: {
        type: Boolean,
        required: true
    },
    children: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Task'
        }
    ],
    status: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    actions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'ActionTask'
        }
    ],
    durationMins: {
        type: Number
    },
    difficulty: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    importance: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    color: {
        type: String,
        required: true,
        min: 6,
        max: 25
    },
    day: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Day'
    },
    marks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MarkTask'
        }
    ],
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Task', taskSchema)
