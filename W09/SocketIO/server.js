const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
// the interface via which socket connections happens is called io
const io = socketio(server);

let usersockets = {};

app.use('/',express.static(__dirname+'/frontend'));
// this copy of code runs for each socket created   
// i.e if 3 clients are created then 3 copies of sockets will be made
io.on('connection',function(socket){ // On sucessful connecction , we get a socket and that socket is the pipeline
    console.log('New socket from '+socket.id);
    socket.emit('connected');

    socket.on('login_data',function(data){
        // data is the user name
        usersockets[data] = socket.id;
        console.log(usersockets);
    });

    socket.on('send_msg',function(data){
        console.log('Received message : ' + data.message +" by "+data.user);
        if(data.message.startsWith('@')){
            // showing message to sender and recipient
            let recipient = data.message.split(':')[0].substr(1);
            let recipientSocket = usersockets[recipient];
            let senderSocket = socket.id;
            console.log("Sender's socket id is :" + senderSocket);
            console.log("Receiver's socket id is : " + recipientSocket);
            console.log(data.message.split(':')[1]);
            data_to_be_send = {
                user : data.user,
                message : data.message.split(':')[1]
            }
            io.to(recipientSocket).to(senderSocket).emit('rec_msg',data_to_be_send);
        }else{
            // showing message to both sender and all other connected to server
            io.emit('rec_msg',data);
        }
        // this will be emitted to all the clients via socket made with individual client
        // socket.broadcast.emit('rec_msg',data);
        // using broadcast only other users(sockets) will get the message , not the socket sending the message
    });
}) 

server.listen(2345,()=>console.log("Server started on https://localhost:2345"));