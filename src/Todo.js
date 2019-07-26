const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title: String,
    createdAt:{
        type: Date,
        default: Date.now
    }
}) 

module.exports = mongoose.model('Todo', TodoSchema)
