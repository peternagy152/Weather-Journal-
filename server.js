// Setup empty JS object to act as endpoint for all routes


// Setup Server
// --------------------------------- Server Setup ------------------------------------ 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());  
const cors = require('cors');
app.use(cors());
//--------------------------------------- Create Server ------------------ 
app.use(express.static('website'));
console.log("Server Is Running !");
const port = 8000 ;
const server = app.listen(port , function listening(){
    console.log("Running on Port Number : " + port) ;
})

// ----------------------- Here We Go -------- 
// -----------  Routing And HTTPS  -------------- 

let projectData = {};
//Get Request 

// Post Request 
app.post(
    '/addTemp' ,function addTemp(req,res){
        //projectData.push(req.body); 
        projectData['date'] = req.body.date ;
        projectData['temp'] = req.body.temp ;
        projectData['feelings'] = req.body.feelings;
        console.log(projectData);

    })

    app.get('/returndata' , function(req,res){
        res.send(projectData);
    })