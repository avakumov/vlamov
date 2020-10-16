const mongoose = require('mongoose')

const actionTaskSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    action: {
        required: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.models.ActionTask || mongoose.model('ActionTask', actionTaskSchema)
