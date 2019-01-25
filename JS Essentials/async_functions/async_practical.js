function downloadFile(url,downloaded){
    console.log("Downloading file: "+url);
    // We are downloading the file here
    // Let's assume it takes 3 seconds to download
    // We use setTimeout to generate fake delay

    setTimeout(function(){
        let filePath = 'cd/blehhhh';
        console.log("File was downloaded to: " + filePath);
        downloaded(filePath);
    },3000);
}

function resizeFile(filepath,resized){
    //We are resizing the file. It takes 3 seconds
    //We again use a fake setTimeout delay
    console.log("File is being resized....");
    setTimeout(function(){
        let newPath = filepath+"_resized";
        console.log("File was resized at: " + filepath)
        resized(newPath); 
    },3000);
}

function uploadFile(filePath,uploaded){
    //We will upload this file, it takes 3 seconds,
    //We will use another fake setTimeout delay logic
    console.log("File is being uploaded...");
    setTimeout(function(){
        let newPath = filePath+"_uploaded";
        console.log("File was uploaded to: " + filePath)
        uploaded(newPath);
    },3000);
}

downloadFile("randomwebsite.com",function(path){
    console.log("We got the file at : " + path);
    resizeFile(path,function(resized_path){
        console.log("Resized file is at path "+resized_path);
        uploadFile(resized_path,function(uploadedPath){
            console.log("Uploaded file is at path "+uploadedPath);    
        })
    });
});