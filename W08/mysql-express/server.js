const express = require('express')
const app = express();
const path = require('path');
// const db = require('./db'); not using it here like before

// let  persons = [
//     {name:'Abc',age:22,city:'Delhi'},
//     {name:'Xyz',age:23,city:'New Zealand'} 
// ]

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','hbs');
app.set('views',__dirname+'/views');
// important to use , in order to avoid lookup error


app.use('/pages',require('./routes/pages').route);
app.use('/api',require('./routes/api').route);
app.use('/api',express.static(path.join(__dirname,'public_static')));
app.listen(4444,()=>{
    console.log('Server started.')
})