// No callbaks needed in promise function
function download(url){
    return new Promise(function(resolve,reject){
        if(!url.startsWith('http')){
            return new reject('What the hell ! Upload err');   
        }
        console.log('Download about to start from '+url)
        setTimeout(function(){
           resolve('...../downloadedFile.pdf');
        },4000);
    })
}

function compress(file){
    return new Promise(function(resolve,reject){
        if(file.startsWith('/.')){
            return new reject('What the hell !  err');
        }
        console.log('Compressing about to start for '+file)
        setTimeout(function(){
            resolve('...../compressedFile.pdf');
        },4000);  
    })
}

function upload(server,file){
    return new Promise(function(resolve,reject){
        if(!server.startsWith('ftp')){
            return new reject('What the hell ! Upload err');
        }
        console.log('Uploading about to start for '+file + ' at ' +server)
        setTimeout(function(){
            resolve('...../uploadedFile.pdf');
        },4000);
        })
}


download('https://www.hackerearth.com/challenges/')
    .then((file)=>{
        compress(file).then((compressedFile)=>{
            upload('ftp://dasda.com',compressedFile).then((uploadedFile)=>{
                console.log('uploaded file is : '+uploadedFile);
            })
        })
    })
    .catch((err)=>{
        console.log(err);
    })

// Alternatively this can be written as :
download('https://www.hackerearth.com/challenges/')
    .then((file)=>{
        compress(file);
    })
    .then((compressedFile)=>{
        upload('ftp://dasda.com',compressedFile);
    })
    .then((uploadedFile)=>{
        console.log('Uploaded file is at : '+uploadedFile);
    })
    // this catch block can be used to catch error in any block
    // we don't have to write it seperately for each block
    .catch((err)=>{
        console.log(err);
    })


// Use promise.all() for running each promise in a background thread
