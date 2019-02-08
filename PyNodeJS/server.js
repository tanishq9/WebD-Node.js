const express = require('express');
const cors = require('cors');
let {PythonShell} = require('python-shell');
     
const app = express();

app.use(cors());
// Middleware for POST request data 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',express.static(__dirname+'/public'));

app.post('/name',function(req,res){
     console.log('Version 1: calling Python script from a Node child process');
     var spawn = require('child_process').spawn
     var process = spawn('python',['./hello.py',req.body.person_name]);
     // req.body.name will be sys.argv[1]
     process.stdout.on('data',function(result){
        var textChunk = result.toString('utf-8'); // buffer to string
        console.log(textChunk);
        res.send(textChunk);
     });
    console.log('Version 2 : Calling Python script from a Node child process, using python-shell package');
      var options = {
          args : [
              req.body.movie_name
          ]
      }
     
      PythonShell.run('./moviename.py',options,function(err,data){
         if(err){
 //            res.send(err);
         }
 
 //        res.send(data);
      });
});



app.get('/name',function(req,res){
    res.send('Blehhh');
});

app.listen(3333,function(){
    console.log("Server started.");
});
