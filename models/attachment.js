const mongoose = require('mongoose')

const AttachmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    message: {
        required: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Attachment', AttachmentSchema)
