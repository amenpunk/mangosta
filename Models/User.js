const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name : String,
    lastName : String,
    lastLogin : Date,
    years : Number
})

const User = mongoose.model('User', userSchema)

module.exports.User = User
