const mongoose = require('mongoose')
const { Schema } = mongoose;


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    // useCreateIndex: true
})


const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'please tell us your name']

    },
    age: {
        type: Number,
        required: [true, `you can't be in our system without your age`],
        min: [10, 'no babies in our db']
    },
    sex: {
        type: String,
        required: true,
        enum: {
            values: ['male', 'female'],
            message: '{VALUE} is not supported'
        }
    }

});

const User = mongoose.model('User', userSchema);

const dad = new User({
    name: 'Andrew Waters',
    age: 11,
    sex: 'male'
})


dad.save().then(() => {
    console.log(dad)
}).catch((error) => {
    console.log(error)
})