const express = require('express');
const fareUtils = require('./fareUtils');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(__dirname+'/public'))


app.post('/calcfare', (req, res) => {
    let km = parseFloat(req.body.km)
    let min = parseInt(req.body.min)
    console.log(km);
    console.log(min);
    let fare = fareUtils.calcFare(km,min);

    res.send({fare: fare})
})

app.get('/rate', (req, res) => {
    res.send(fareUtils.rate)
})

app.listen(4444,function(){
    console.log('Server started.');
})

