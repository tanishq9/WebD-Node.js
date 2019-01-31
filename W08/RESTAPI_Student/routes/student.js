const route = require('express').Router();

students = [
    {name:"Tanishq" , college:"DTU"},
    {name:"Varun" , college:"USICT"}
];

route.get('/student',function(req,res){
    res.send(students);
});

route.post('/student',function(req,res){
    students.push({
        name : req.body.name,
        college : req.body.college
    });
    res.redirect('/student'); // we send a GET request to /student which returns list as a response
});

module.exports = route;