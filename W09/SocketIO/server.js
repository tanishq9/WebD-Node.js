const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
// the interface via which socket connections happens is called io
const io = socketio(server);

app.use('/',express.static(__dirname+'/frontend'));
// this copy of code runs for each socket created   
// i.e if 3 clients are created then 3 copies of sockets will be made
io.on('connection',function(socket){ // On sucessful connecction , we get a socket and that socket is the pipeline
    console.log('New socket from '+socket.id);
    socket.emit('connected');
    socket.on('send_msg',function(data){
        console.log('Received message : ' + data.message +" by "+data.user);
        io.emit('rec_msg',data);
        // this will be emitted to all the clients via socket made with individual client
        // socket.broadcast.emit('rec_msg',data);
        // using broadcast only other users(sockets) will get the message , not the socket sending the message
    });
}) 

server.listen(2345,()=>console.log("Server started on https://localhost:2345"));