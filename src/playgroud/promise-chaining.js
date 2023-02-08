require('../db/mongoose')
const User = require('../models/user');
const Task = require('../models/task');

Task.findByIdAndDelete("63c6f0011c74f16a022f5529")
    .then((task) => {
        console.log(task)
        return Task.countDocuments({completed: false})
    }).then((result)=>{
        console.log(result)
    }).catch((err)=>{
        console.log(err)
    })