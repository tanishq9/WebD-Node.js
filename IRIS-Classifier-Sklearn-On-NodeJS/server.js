const express = require('express')
const app = express();
let {PythonShell} = require('python-shell');


// Middleware for POST request data 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',express.static(__dirname+'/public'));

app.post('/',function(req,res){
    console.log(req.body);

    console.log('Version 1: calling Python script from a Node child process');
   
    var spawn = require('child_process').spawn;
    var process = spawn('python',['./model.py',req.body.sepal_length,req.body.sepal_width,req.body.petal_length,req.body.petal_width]);
    process.stdout.on('data',function(result){
        var textChunk = result.toString('utf-8'); // buffer to string
        console.log(textChunk);
        res.send(textChunk);
    });

});

app.listen(4444,function(){
    console.log('Server started');
})