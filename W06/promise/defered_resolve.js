function downloadPromise(){
    return new Promise(function(resolve,reject){
        console.log('Starting to download the link.')
        setTimeout(function(){
            console.log('Download is complete.')
            resolve(); // resolve calls the .then part
            // and changes the state of promise to resolved
        },3000)
    })
}

let downloadFile = downloadPromise();
downloadFile.then(function(){
    setTimeout(function(){
        console.log('LoL');
    },5000)
});

// Callback doesn't store the result , jo karna hota hai tab karna hota hai
// But promise can store the result and then do whatever it wants to do with the result


// defered because we can execute the .then function even
// after the function has been resolved