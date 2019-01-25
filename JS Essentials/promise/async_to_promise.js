function some_async_task(callback){
    console.log('Beginning of task.')
    setTimeout(function(){
        console.log('End of task.')
        callback();
    },3000)
}

/*
some_async_task(function(){
    console.log("We did some task.");
}); */

 let some_task_promise = function(){
    return new Promise(function(resolve,reject){
        some_async_task(resolve);
    })    
 }

 some_task_promise().then(function(){
     console.log('After task is complete.');
 });