const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    description: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Project', projectSchema)