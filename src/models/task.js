const mongoose = require('mongoose')
const { Schema } = mongoose;



const taskSchema = new Schema({
    description: {
        type: String,
        required: [true, 'please tell us about your task or else put it in a different db!!'],
        trim: true,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;