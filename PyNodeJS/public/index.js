// Node.JS is a server-side technology, not a browser technology. Thus, Node-specific calls, like require(), do not work in the browser.
$(function(){
    console.log("Page loaded");
    let name = $('#name');
    let button = $('#submit');
    button.click(function(){
        console.log('Button clicked.');
        $.post(
            '/name',
            {
                person_name : name.val(),
                movie_name : "Fast and Furious 7"
            },
            function(data){
                console.log(data);
                window.alert(data);
            }
        );
    });
});    