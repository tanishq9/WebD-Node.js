// download function returns a promise
function download(url){
    return new Promise(function(resolve,reject){
        if(!url.startsWith('http')){
            reject(new Error('Url doesnt start with http'));
        }else{
            setTimeout(function(){
                let filename = "dasdasd";
                resolve(filename);
            },3000);
        }
    }
   )
}

function resize(filename){
    return new Promise(function(resolve,reject){
        if(filename.endsWith('.png')){
            reject(new Error('file not supported'));
        }else{
            setTimeout(function(){
                let resizeFile = "dasdalkds";
                resolve(resizeFile);
            },3000)
        }
    })
}

// download function returns a promise
// then. takes function as an argument

download('httpdasdasdl')
    .then(function(filename){
        resize(filename).then(function(resizedFile){
            console.log(resizedFile+" is at IDK.");
    })
    .catch(function(err){
        // This error can be of any promise function 
        // Thus a promise chain is formed
        console.log(err);
    })
}) 

// We can alternatively write it as follows : 
//download('httpsasas').then(resize).then(function(resizedFile){
//    console.log(resizedFile+" is at IDK.");
//})

download('httpdasdasdl')
    .then(function(downloaedFile){
        console.log(downloaedFile+"......");
        return resize(downloaedFile);// iski return value , ek promise function hai
    }) // agar upar returned promise function ka status resolved hai toh
    // then vala part will be executed.
    .then(function(resizedValue){
        console.log(resizedValue+".......");
    })
    .catch(function(err){
        // This error can be of any promise function 
        // Thus a promise chain is formed
    console.log(err);
})


