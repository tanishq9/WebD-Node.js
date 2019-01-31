$(function(){

    let submit_button = $('#submit');
    let student_name = $('#inp_name');
    let student_college = $('#inp_college');
    let list = $('#list');

    $.get('/student',function(data){
        addData(data);
    });

    submit_button.click(function(){
        $.post(
            '/student',
            {name:student_name.val(),college:student_college.val()},
            function(data){
                console.log(data);
                addData(data);
            }
        )
    })

    function addData(data){
        list.empty();
        for(item of data){
            console.log(item);
            list.append('<li>'+item.name+" : "+item.college+'</li>');
        }
    }
})