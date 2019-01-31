const express = require('express');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',express.static(__dirname+'/public'));
app.use('/',require('./routes/student'));

app.listen(6395,function(){
    console.log('Server started.');
})
