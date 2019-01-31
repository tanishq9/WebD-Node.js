const route = require('express').Router();
const db = require('../db');

route.get('/persons',function(req,res){
    // db.getAllPersons() returns a promise 
    // and we use response from resolve method of promise
    db.getAllPersons()
    .then(function(persons){
        res.send(persons);
    })
    .catch(function(err){
        res.send(err);
    })
});

route.post('/persons',function(req,res){
    db.addNewPerson(req.body.name,req.body.age,req.body.city)
    .then(function(){
        res.redirect('/api/persons/'); // redirect is always a GET request 
    })
    .catch(function(err){
        res.send(err);
    })
});

exports = module.exports = {
    route 
};