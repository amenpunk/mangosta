const mongoose = require('mongoose')
const {User} = require('../Models/User')
const {Blog} = require('../Models/Blog')


const insert = async (req, res) => {
   
    const {name, lastName, years} = req.body
    const user = new User({ _id : new mongoose.Types.ObjectId(),  name, lastName, years, login : new Date()})
    user.save((err, register) => {
        if(err){
            console.log(err)
            return res.json({status : false})
        } 
        console.log(register)
        return res.json({status : true})
    })

} 

const find = async (req, res) => {
    
    const {key,value} = req.params
    if(key === "id"){
        const getByID = User.findById(value, (err, users) => {
            if(err) return re(err)
            return new Promise((ro,re) => {
                return ro(users)
            })
        })
        let user = await getByID
        return res.send(user) 
    }

    const getUsers = User.find({ [key ]: value },(err, users) => {
        if(err) return re(err)
        return new Promise((ro,re) => {
            return ro(users)
        })
    })
    
    let users = await getUsers
    return res.send(users.shift())

}

const update = async (req,res) => {
    const { newValue, key, value } = req.body;
    console.log( value,newValue)
    const updated = User.updateOne({ name : value } , { name : newValue}, (err, data) => {
        return new Promise((ro,re) => {
            if(err) return re(err)
            return ro(data)
        })
    })
    let register = await updated
    return res.send(register)
}

const getBlogs = async (req,res) => {
    let {uid} = req.body;

    Blog.find()
   //.findOne({ name : "Ming"})
   .populate("user") // key to populat
   .then(user => {
       console.log(user)
      return res.json(user); 
   });

}

module.exports = { find, insert, update, getBlogs }
