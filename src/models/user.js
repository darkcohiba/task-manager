const mongoose = require('mongoose')
const validator = require('validator')
const { Schema } = mongoose;


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


module.exports = User