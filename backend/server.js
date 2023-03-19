require('dotenv').config()

const express = require("express")
const app= express();
const cors = require("cors")
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")
const passport = require("passport")
const mongoose = require("mongoose")
const userRoutes = require("./routes/user")
const userExpense = require("./routes/expense")
const userDues = require("./routes/dues")
app.use(cors())
app.use(express.json())
app.engine('html', require('ejs').renderFile);
app.set('view engine','html')
app.use(bodyParser.urlencoded({ extended: true }))
const path = require('path')
// const api = "http://localhost:3000"

// const users=[{name:"Depanshu Sahu",
// email:"depanshusahu057@gmail.com",
// password:"asdf"}];

// mongoose.set('strictQuery', true);
// mongoose.connect("mongodb://127.0.0.1:27017/TrackItUserDB");

// const userSchema = new mongoose.Schema({
//     username:String, 
//     passowrd:String,
//     email:String,
//     googleId:String,
//     facebookId:String,
//     secret:String,
// })

// const User = mongoose.model("TrackItUser",userSchema)

// app.get("/login",function(req,res){
//     res.render("login")
//     console.log("login page")
// })
// app.post("/login",async function(req,res){
//     console.log(req.body);
//     console.log("logged")
//     let user={};
//     for(let i=0;i<users.length;i++){
//         if(users[i].email===req.body.email){user=users[i];break;}
//     }
//     console.log(user)
//     bcrypt.compare(req.body.password,user.password,function(err,result){
//         if(result){console.log("verified user");}
//         else {console.log("user not verified");}
//     })
    
    
// })
// app.post("/register",async function(req,res){
//     console.log(req.body);
//     console.log("registered")
//     try{

//         const hashedPassword = await bcrypt.hash(req.body.password,10);
//         users.push({
//             id:Date.toString,
//             name:req.body.name,
//             email:req.body.email,
//             password:hashedPassword
//         })
//         const newUser = new User({
//             name:req.body.name,
//             email:req.body.email,
//             password:hashedPassword
//         })
//         newUser.save(function(err){
//             if(err){console.log(err);}
//             else{
//                 res.redirect(`${api}`) 
//             }
//         })
//         console.log(users);
//     }catch{
//         res.redirect(`${api}/register`)
//     }
//     console.log(users);
// })


//routes
// app.use('/api/expense',)
app.use('/api/user',userRoutes)
app.use('/api/expense',userExpense)
app.use('/api/dues',userDues)
app.use(express.static(path.join(__dirname,'/build')))

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })