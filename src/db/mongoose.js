const mongoose = require('mongoose')
// const validator = require('validator')
const { Schema } = mongoose;


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    // useCreateIndex: true
})

////////////////////////////////////////////////////////////////
///////////////////Task Configuration///////////////////////////
////////////////////////////////////////////////////////////////

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

// const laundry = new Task({
//     description: 'do laundry',
// })


// laundry.save().then(() => {
//     console.log(laundry)
// }).catch((error) => {
//     console.log(error)
// })