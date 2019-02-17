const express = require('express')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cv = require('opencv4nodejs');

const FPS = 30;
const wCap = new cv.VideoCapture(0);
wCap.set(cv.CAP_PROP_FRAME_WIDTH,560);
wCap.set(cv.CAP_PROP_FRAME_HEIGHT,560);

// Middleware for POST request data 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',express.static(__dirname+'/public'));

setInterval(function(){
    const frame = wCap.read();
    const image = cv.imencode('.jpg',frame).toString('base64');
    io.emit('image',image);
    
    require("fs").writeFile("input.png",image, function(err) {
        console.log(err);
    });

    var spawn = require('child_process').spawn;
    var process = spawn('python',['./model.py']);
    process.stdout.on('data',function(result){
        var textChunk = result.toString('utf-8'); // buffer to string
        console.log(textChunk);
        console.log("Sending the response.")
        res.send(textChunk);
    });
    
},60000/FPS);

server.listen(process.env.PORT || 4444,function(){
    console.log('Server started');
})