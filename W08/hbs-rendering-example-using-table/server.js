const express = require('express')
const app = express();

let  persons = [
    {name:'Abc',age:22,city:'Delhi'},
    {name:'Xyz',age:23,city:'New Zealand'} 
]

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','hbs');
app.set('views',__dirname+'/views'); // important to use , in order to avoid lookup error

app.get('/',(req,res)=>{
    // first argument in render is the name of the hbs file
    // which is looked up in the views folder
    res.render('persons',{persons})
})

app.get('/add',(req,res)=>{
    res.render('person_add');
})

app.post('/add',(req,res)=>{
    persons.push({
        name : req.body.name,
        age : req.body.age,
        city : req.body.city
    });
    res.redirect('/');
})

app.listen(4444,()=>{
    console.log('Server started.')
})