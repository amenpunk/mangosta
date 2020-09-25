const express = require('express')
const port = process.env.port || 8080;
const app = express();
const http = require('http')
const mongoose = require('mongoose');
const server = http.createServer(app);
const bodyParser = require('body-parser')
const url = "mongodb://localhost/landing"
const db = mongoose.connection;
const {User} = require('./Models/Models')
mongoose.connect(url, {useUnifiedTopology : true, useNewUrlParser: true})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/insert', (req,res) => {
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
})

app.get('/find/:key/:value', async (req,res) => {

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

})


server.listen(port, () => {
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('\x1b[34m%s\x1b[0m',`db ${url} connected:`)
    });
    console.log( '\x1b[33m%s\x1b[0m', "server on port:",  port)
})


