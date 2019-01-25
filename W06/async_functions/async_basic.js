// There is no true multi-threading in Javascript,
// but you can get asynchronous behavior using setTimeout()
// The setTimeout will register a function for later execution.
// But at no time code will run in parallel for the same context
function task(done){
    console.log('We are doing a task');
    // It means function is stored on a stack
    // and will be fired at time t;
    // provided the intepreter is free at that time
    // and not running any other code
    // example if infinite while loop is being run
    // then timeout will never get a chance to execute
    setTimeout(done,1000); 
}

task(function(){
    console.log('Task is done.');
})

console.log('Outside Task')
