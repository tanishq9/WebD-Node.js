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
Promise.all(
    [download('httpdlkasda'),
    download('httpaldkaldka'),
    download('httpnsalmlamd')
]).then(function(values){
    return Promise.all(values.map(resize)) // these return values will promise functions
    // if the promise functions have been resolved then only then function will be executed for them
}).then(function(values){
    console.log(values+"....");
}).catch(function(err){
    console.log(err);
})