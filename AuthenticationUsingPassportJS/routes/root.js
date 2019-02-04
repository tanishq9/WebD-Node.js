// router.post('/login',function(req,res){
//     console.log(req.body.userName);
//     Users.findOne({
//         where : {
//             username : req.body.userName
//         }
//     }).then(function(user){
//         if(!user){
//             return res.send('No such user');
//         }
//         if(user.password!=req.body.password){
//             return res.send('Wrong password');
//         }
//         console.log('User logged.');
//         return res.send('Hello '+req.body.userName);
//     })
// })

// authenticate using local strategy , local strategy
// means we are saving username and password in database
// and not by using gmail , fb or twitter login

const route = require('express').Router()
const passport = require('../passport')
const Users = require('../db').Users

route.get('/login', (req, res) => {
    res.render('login')
})
route.get('/signup', (req, res) => {
    res.render('signup')
})
route.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/private'
}))

route.post('/signup', (req, res) => {
    Users.create ({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }).then((createdUser) => {
        res.redirect('/login')
    })
})

exports = module.exports = route