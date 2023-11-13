const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const RegisterModel = require('./models/Register.cjs')



const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/web-project-login");

app.post('/signup',(req,res) => {
    const {name,email,password} = req.body;
    RegisterModel.findOne({email:email})
    .then ((user) => {
        if(user) {
            res.json("Already have an account")
        }
        else{
            RegisterModel.create({email:email,name:name,password:password})
            .then(result => res.json("Account created"))
            .catch(err => res.json(err))
        }
    })
    .catch(err => res.json(err))

})

app.post('/login',(req,res) => {
    const {email,password} = req.body;
    RegisterModel.findOne({email:email,password:password})
    .then ((user) => {
        if(user){
            res.json("Account Found")
        }
        else{
            res.json("wrong details")
        }
    })
    .catch(err => res.json(err))
})

app.listen(3001,() => {
    console.log("Server is Running")
})