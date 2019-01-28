const route = require('express').Router()

let todos = [
    {task:'This is first task'},
    {task:'This is another task'}
]

route.get('/',function(req,res) {
    res.render('todos.hbs',{todos});
    // first argument is the name of hbs file and second argument is the data to be shown
    // How is the view rendered ?? Process kya hai ?
    // Answer : when we render , the handle bar function takes a look
    // into this object and sees that if there is something called todos or not
    // if its an array then it will list item for each task , the code of which is
    // written in the hbs file
})

route.post('/',function(req,res){
    todos.push({
        task:req.body.newtodo
    });
    res.redirect('/todos');
})

module.exports = route