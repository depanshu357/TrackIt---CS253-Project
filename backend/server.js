const express = require("express")
const app= express();
const cors = require("cors")
const bodyParser = require("body-parser")
app.use(cors())
app.use(express.json())
app.engine('html', require('ejs').renderFile);
app.set('view engine','html')
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/login",function(req,res){
    res.render("login")
    console.log("login page")
})
app.post("/login",function(req,res){
    console.log(req.body);
    console.log("logged")

})
app.post("/register",function(req,res){
    console.log(req.body);
    console.log("registered")
})


app.listen(5000,function(){
    console.log("port started on http://localhost:5000")
})