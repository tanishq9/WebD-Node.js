const route = require('express').Router();
// students is an array of objects
let students = [
    {name: "Rahul", college: "DTU", year: "I"},
    {name: "Neha", college: "NSIT", year: "II"},
    {name: "Saksham", college: "JIIT", year: "III"},
    {name: "Parul", college: "IIIT", year: "IV"}
]

route.get('/',(req,res)=> res.send(students));
route.post('/', (req, res) => {
    students.push({
        // we have a json body here
        name: req.body.name,
        college: req.body.college,
        year: req.body.year
    })
    res.send(students) // response that we are sending after a post request
})
// :(colon) is a wildcard , it matches anything
route.get('/:id',(req,res)=>{
    // by adding this if check , we can add this layer above the (./students/add) layer without the issue of us
    // trying to parse add in place of integer
    // because :id is a wildcard and matched anything
    if(isNaN(parseInt(req.params.id))){
        next();
    }
    res.send(students[req.params.id])
});

module.exports = route;