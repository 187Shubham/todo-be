const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required : true
        },
        description :{
            type:String,
            required:true
        },
        status:{
            type:String,
            enum:['pending','completed'],
            default:'pending'
        },
        creatAt:{
            type:Date,
            default: Date.now
        }
    }
);
module.exports = mongoose.model('todo',todoSchema);