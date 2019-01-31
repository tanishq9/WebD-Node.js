const route = require('express').Router()
// All that is exported by db can only be required here 
const db = require('../db');

// => means a function
route.get('/',function(req,res){
    db.getAllPersons()
        .then(function(persons){
            res.render('persons',{persons});
        })
        .catch(function(err){
            res.send(err);
        })
    // first argument in render is the name of the hbs file
    // which is looked up in the views folder
})

route.get('/add',(req,res)=>{
    res.render('person_add');
})

route.post('/add',(req,res)=>{
    // persons.push({
    //     name : req.body.name,
    //     age : req.body.age,
    //     city : req.body.city
    // });
    db.addNewPerson(req.body.name,req.body.age,req.body.city)
        .then(function(){
            res.redirect('/pages');
        })
        .catch(function(err){
            res.send(err);
        })
    res.redirect('/pages'); // Redirect to see the updated pages
})

exports = module.exports = {
    route 
}