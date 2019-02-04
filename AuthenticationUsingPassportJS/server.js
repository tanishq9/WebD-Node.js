const express = require('express');
const session = require('express-session');
const passport = require('./passport');

const app = express();

// Set up the view engines
app.set('view engine','hbs');
app.set('views',__dirname+'/views');

// To handle the data for POST request
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret : 'somesecretstring'
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/public',require('./routes/public'));
app.use('/private',require('./routes/private'));
app.use('/',require('./routes/root'));

app.listen(4444,()=>{console.log("Server started at https://localhost:4444");})