// We will write all of UI our code , inside the below function as this function only works
// after the whole UI has been loaded
// We are confident about the fact that the html page has been loaded , all the elements are fully available

$(function(){
    // Inside $ use the CSS selector
    let newtodobox = $('#newtodo');
    let addtodo = $('#addtodo');
    let todolist = $('#todolist');

    addtodo.click(function(){
        console.log('Button was clicked.')
        // If you are not using jquery function then you cannot use 
        // .val() as all these functions are added by jquery
        let newtodo = newtodobox.val();
        console.log(newtodo);

        // AJAX : Async Javascript and XML
        // async means w/o reloading the page, the page can
        // still make get and post request to the server
        // by just interacting with the server and DOESNT reload the page
        $.post(
            // We are sending request using AJAX from frontend to backend and then show data back to the frontend
            '/todos', // jis link pe post request bhejni hai
            {task:newtodo},// we receive this data in req.body.task ,check todos.js for clarification
            function(data){ // this data is an array of all the tasks whose size keeps on increasing
                // or this is an array of all the tasks that we have posted to server till now
                console.log(data);
                todolist.empty();
                for(todo of data){
                    todolist.append('<li>' + todo.task + '</li>');
                }
            }
        );
    });
    
    console.log("Page is loaded.");
})
console.log("Some stuff.")