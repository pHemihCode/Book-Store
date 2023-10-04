const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:{
        type:'string',
        required: true,
       },
   author:{
    type:'string',
    required: true,
   },
   publishedYear:{
    type:Number,
    required: true,
   }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Books', BookSchema);