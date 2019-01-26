/* other packages only require server.js file */
// only if your folder is a npm package , done by using
// npm init then only you can install other npm packages into it
const express = require('express')
const server = express()
server.get('/', function (req, res, next) {
    res.send("Hello World")
})

// using params
server.get('/greet/:tod/:name',function(req,res,next){
    let tod = 'Morning';
    switch(req.params.tod){
        case 'morning' : tod = 'Morning';break;
        case 'evening' : tod = 'Evening';break;
    }
    let greeting = 'Good ' + tod + "," + req.params.name;
    res.send(greeting);
})
// using query
server.get('/greet/:tod',function(req,res,next){
    let tod = 'Morning';
    switch(req.params.tod){
        case 'morning' : tod = 'Morning';break;
        case 'evening' : tod = 'Evening';break;
    }
    let greeting = 'Good ' + tod + "," + req.query.name;
    res.send(greeting);
})

server.listen(2121)
