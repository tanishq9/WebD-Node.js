const express = require('express');
const todoRoute = require('./routes/todos');

const srv = express();

srv.set('view engine','hbs');
srv.set('views',__dirname+'/views');
// Layers to interpret the data
srv.use(express.json());
srv.use(express.urlencoded({extended:true}));
// this means that our server uses hbs 
// to render files , hbs here is our view engine

// hbs is a templating library and helps us to inject code in the html files

srv.use('/todos',todoRoute);

srv.listen(4444);