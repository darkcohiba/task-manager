const mongoose = require('mongoose')
const { Schema } = mongoose;


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    // useCreateIndex: true
})


const userSchema = new Schema({
    name: String,
    age: Number,
});

const User = mongoose.model('User', userSchema);

const dad = new User({
    name: 'Andrew Waters',
    age: 67
})


dad.save().then(() => {
    console.log(dad)
}).catch((error) => {
    console.log(error)
})