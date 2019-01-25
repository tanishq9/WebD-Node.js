function download(url){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Gully GANG BOI."+"       "+url);
        },4000);        
    })
}

let returnedPromiseFunction = download("http://google.com")
// .then(...) part is only executed if resolve(....) is called inside promise
returnedPromiseFunction.then(function(string){
    console.log('Executed.'+string);
})