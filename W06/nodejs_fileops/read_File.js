const lib = require('fs')

lib.readFile(__dirname+'/myfile.txt',function(err,data){
    if(err) throw err
    console.log(data.toString());
}) 