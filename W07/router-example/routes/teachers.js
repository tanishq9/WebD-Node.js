const route = require('express').Router()

let teachers = [
    {name: "Arnav", subject: "Web Dev"},
    {name: "Prateek", subject: "Competitive Coding"}
]

route.get('/',(req,res)=>res.send(teachers));
route.get('/add',(req,res)=>{
    teachers.push({
        name : req.query.name,
        subject : req.query.subject
    })
    // get always has to send a respond otherwise there will be a timeout
    res.send(teachers);
})
// :(colon) is a wildcard , it matches anything
route.get('/:id', (req, res) => res.send(teachers[req.params.id]))
module.exports = route; // necessary otherwise server.js cannot require the file