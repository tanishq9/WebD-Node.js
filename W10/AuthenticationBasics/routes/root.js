const router = require('express').Router();
const Users = require('../db').Users;

router.get('/login',function(req,res){
    res.render('login');
})

router.get('/signup',function(req,res){
    res.render('signup');
})

router.post('/login',function(req,res){
    console.log(req.body.userName);
    Users.findOne({
        where : {
            username : req.body.userName
        }
    }).then(function(user){
        if(!user){
            return res.send('No such user');
        }
        if(user.password!=req.body.password){
            return res.send('Wrong password');
        }
        console.log('User logged.');
        return res.send('Hello '+req.body.userName);
    })
})

router.post('/signup',function(req,res){
    Users.create({
        username : req.body.userName,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName
    }).then((createdUser)=>{
        console.log('User created.');
        res.redirect('/login');
    })
})

module.exports = router;