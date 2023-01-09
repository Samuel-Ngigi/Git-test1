const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmi",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/bmi",function(req,res){
    var w=Number(req.body.weight);
    var h=Number(req.body.height);
    var bmi=Number(w/(h*h));
    if(bmi<18.5){
        res.send("<h2>You are underweight!</h2>")
    }
    else if(18.5<=bmi<25){
        res.send("Your weight is Normal");
    }else if(25<=bmi<34){
        res.send("<h2>You are Over Weight!</h2>");
    }else
    res.send("<h2>Clinically obese</h2>");

});

app.listen(3000,function(){
    console.log("The server is running on port 3000");
});