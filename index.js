import express from 'express'
const port = process.env.port || 8080;
const app = express();
const http = require('http')
const mongoose = require('mongoose');
const server = http.createServer(app);
const bodyParser = require('body-parser')
const url = "mongodb://localhost/landing"
const {router}  = require("./Controller/Routes")

const db = mongoose.connection;
mongoose.connect(url, {useUnifiedTopology : true, useNewUrlParser: true})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/',router)

server.listen(port, () => {
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('\x1b[34m%s\x1b[0m',`db ${url} connected:`)
    });
    console.log( '\x1b[33m%s\x1b[0m', "server on port:",  port)
})


