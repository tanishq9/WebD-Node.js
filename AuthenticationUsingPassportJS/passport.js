// To configure passport we need to build some strategy
// I.E given a username and password , how do we figure out 
// if the user is correct or not
// these kind of rules are written in strategies
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Users = require('./db').Users

// To save user data into current Session , we are only saving the user name here
passport.serializeUser(function (user, done) {
    console.log("Serialize Triggered");
    done(null, user.username)
})

// To find out which user is saved in a session
passport.deserializeUser(function (username, done) {
    console.log("Deserialize Triggered");
    Users.findOne({
        username: username
    }).then((user) => {
        if (!user) {
            return done(new Error("No such user"))
        }
        return done(null, user)
    }).catch((err) => {
        done(err)
    })
})

passport.use(new LocalStrategy(function (username, password, done) {
    console.log("Local Strategy Triggered.")
    console.log(username);
    console.log(password);
    Users.findOne({
        where: {
            username: username
        }
    }).then((user) => {
        if (!user) {
            return done(null, false, {message: "No such user"})
        }
        if (user.password !== password) {
            return done(null, false, {message: "Wrong password"})
        }
        return done(null, user)
    }).catch((err) => {
        return done(err)
    })
}))

exports = module.exports = passport;