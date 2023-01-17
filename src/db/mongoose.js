const mongoose = require('mongoose')
const validator = require('validator')
const { Schema } = mongoose;


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    // useCreateIndex: true
})

////////////////////////////////////////////////////////////////
///////////////////User Configuration///////////////////////////
////////////////////////////////////////////////////////////////
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'please tell us your name'],
        trim: true,

    },
    email:{
        type: String,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Please enter a valid email address')
            }
        }
    },
    age: {
        type: Number,
        // required: [true, `you can't be in our system without your age`],
        default: 0
    },
    sex: {
        type: String,
        required: true,
        enum: {
            values: ['male', 'female'],
            message: '{VALUE} is not supported'
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
        validate(value){
            if (value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }

    }
});



const User = mongoose.model('User', userSchema);

// const me = new User({
//     name: 'Sam Waters',
//     sex: 'male',
//     age: 30,
//     email: 'SAMUEL.waters@gmail.com',
//     password: 'flatiron098'
// })


// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

// console.log(User.find({}))


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

const laundry = new Task({
    description: 'do laundry',
})


laundry.save().then(() => {
    console.log(laundry)
}).catch((error) => {
    console.log(error)
})