const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : String,
    lastName : String,
    lastLogin : Date,
    years : Number,
    blog : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "blog"
    }]
})

const User = mongoose.model('user', userSchema)

module.exports.User = User
