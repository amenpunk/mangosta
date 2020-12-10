let {Blog} = require('../Models/Blog')

const Insert = async (req,res) => {
    let {id, title} = req.body;
    let blog = new Blog({ user : id, title})
    blog.save((err, result) => {
        if(err) return res.send({ status : 0})
        console.log(result)
        return res.send({status:1})
    })
}

module.exports = { Insert }