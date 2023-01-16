const mongoose = require('mongoose')
const validator = require('validator')
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
    email:{
        type: String,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Please enter a valid email address')
            }
        }
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
    },
    occupation: {
        type: String,
        required: [true, 'please tell us your job']
    },
    years_employed: {
        type: Number,
        validate(value){
            if (value < 2) {
                throw new Error('Please join linkedIn, we are only interested in experienced job hunters.')
            }
        }
    }

});

const User = mongoose.model('User', userSchema);

const dad = new User({
    name: 'Sam Waters',
    age: 11,
    sex: 'male',
    occupation: 'Coder',
    years_employed: 3,
    email: 'andrew'
})


dad.save().then(() => {
    console.log(dad)
})

// .catch((error) => {
//     console.log(error)
// })