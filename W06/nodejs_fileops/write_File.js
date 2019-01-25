const lib = require('fs')

lib.writeFile(__dirname+'/myfile.txt',"some data",function(err){
    if(err) throw err
    console.log('File was written.')
})