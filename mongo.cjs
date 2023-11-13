const mongoose = require("mongoose");
const { string } = require("prop-types");
mongoose.connect("mongodb://127.0.0.1:27017/web-project-login/")
//mongodb://localhost:27017
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed");
})




const newSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection = mongoose.model("collection",newSchema)

module.exports = collection