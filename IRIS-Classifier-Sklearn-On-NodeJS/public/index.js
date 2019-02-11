$(function(){
    console.log("Page Loaded");
    let sl = $("#sl");
    let sw = $("#sw");
    let pl = $("#pl");
    let pw = $("#pw");
    let submit = $("#submit");
    submit.click(function(){
        console.log("Button clicked.");
        $.post(
            '/',
            {
                sepal_length : sl.val() ,
                sepal_width:sw.val() ,
                petal_length:pl.val(),
                petal_width:pw.val()
            },
            function(data){
                console.log(data);
                // this data will be used to update the frontend
                if(data==0){
                    window.alert('setosa');
                }                
                if(data==1){
                    window.alert('versicolor');
                }                
                if(data==2){
                    window.alert('virginica');
                }
            }
        )
    })
})