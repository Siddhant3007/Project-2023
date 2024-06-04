var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static(''))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser: true,
    useunifiedtopology:true

});

var db = mongoose.connection;

db.on('Error',()=> console.log("error in connrction"))
db.on('open',()=> console.log("connrction success"))

app.post("/signup",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var passward = req.body.passward;


    var data = {
        "name":name,
        "email":email,
        "passward":passward
    }

    db.collections('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;

        }
        console.log("record inserted");
    });
    return res.redirect('login_user.html')
})



app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-origin":'*'
    })
    return res.redirect('login_user.html');
}).listen(3000)


console.log("listening on port 3000");