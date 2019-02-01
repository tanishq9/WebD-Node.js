console.log('Hello on frontend.');

let socket = io();
socket.on('connected', () => {
    console.log("Connected " + socket.id)
})

$(function(){
    let msglist = $('#message-list');
    let inp_message = $('#message');
    let send_button = $('#submit');

    send_button.click(function(){
        socket.emit('send_msg',{message : inp_message.val()});
    });

    socket.on('rec_msg',function(data){
        console.log(data);
        msglist.append('<li>'+data+'</li>');
    });

})