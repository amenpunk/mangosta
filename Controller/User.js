const {User} = require('../Models/User')

const insert = async (req, res) => {
   
    const {name, lastName, years} = req.body
    const user = new User({ name, lastName, years, login : new Date()})
    user.save((err, register) => {
        if(err){
            res.json({status : false})
            console.log(err)
        } 
        console.log(register)
        res.json({status : true})
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

module.exports = { find, insert, update }
