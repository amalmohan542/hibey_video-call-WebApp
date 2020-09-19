const express = require("express");
const app = express();
const server = require('http').Server(app);
const { v4: uuidv4 } = require('uuid');
uuidv4();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.redirect('/${uuidv4()}');
})
app.get('/:room',(req,res)=> {
    res.render('room',{roomId : req.params.room })
})

app.listen("3000",function(){
    console.log("Server start running on port 3000");
});