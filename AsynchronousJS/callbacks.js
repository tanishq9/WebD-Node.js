function download(url,downloaded){
    if(!url.startsWith('http')){
        return new (Error('What the hell ! Download err'));
    }
    console.log('Download about to start from '+url)
    setTimeout(function(){
        downloaded(null,'...../downloadedFile.pdf');
    },4000);
}

function compress(file,compressed){
    if(file.startsWith('/.')){
        return new (Error('What the hell ! Compress err')); 
    }
    console.log('Compressing about to start for '+file)
    setTimeout(function(){
        compressed(null,'...../compressedFile.pdf');
    },4000);
}

function upload(server,file,uploaded){
    if(!server.startsWith('ftp')){
        return new (Error('What the hell ! Upload err'));
    }
    console.log('Uploading about to start for '+file + ' at ' +server)
    setTimeout(function(){
        uploaded(null,'...../uploadedFile.pdf');
    },4000);
}

// Nesting of callbacks is not prefered

download('https://www.hackerearth.com/challenges/',function(err,response1){
    console.log("Downloaded file is at : "+response1);
    if(err){
        throw err;
    }
    response1='/.'+response1;
    compress(response1,function(err,response2){
        if(err){
            console.warn(err);
        }
        console.log("Compressed file is at : "+response2);
        upload('ftp://destination.com',response2,function(err,response3){
            if(err){
                throw err;
            }
            console.log('File successfully uploaded at : '+response3);
        })
    })
})