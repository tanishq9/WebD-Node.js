$(function(){
    let output = $('#text');
    $.get('/',function(data){
        output.text(data);
    });
});