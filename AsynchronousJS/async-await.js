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


// async function actually executes in a background thread

// Using async await syntax
async function task() {
    // all of the stuff written after await should be a promise function
    try{
        const file = await download('https://www.hackerearth.com/challenges/');
        const cfile = await compress(file);
        await upload('ftps://adas',cfile); 
    }catch(err){
        console.log(err);
    }
} 

console.log('Task started.');
task().then(()=>{
    console.log('Task actually ended.');
});
console.log('Task ended.');