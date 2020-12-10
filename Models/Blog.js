const mongose = require('mongoose');

const blogScheme = new mongose.Schema({
    title : String,
    write :  { type : Date, default : new Date()},
    user :  {
        type: mongose.Schema.Types.ObjectId,
        ref : "user"
    }
})

module.exports.Blog = mongose.model('blog', blogScheme)