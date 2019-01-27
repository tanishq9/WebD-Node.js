const express = require('express')
const srv = express();
const todosRoute = require('./routes/todos');

// Adding middleware layer to intepret the post data
srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.get('/hello',(req,res)=>{
    res.send('Hello');
})

// srv has to render html pages from the given folder
// at the link localhost:4567/public , html pages will be rendered
srv.use('/public',express.static(__dirname+'/public'));
// Do /public/html_page_name.html to view the particular web page
// If only /public is written , then index.html will be opened.
srv.use('/todos',todosRoute);

srv.listen(4567);
