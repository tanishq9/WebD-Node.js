console.log('Hello on frontend.');

let socket = io();
socket.on('connected', () => {
    console.log("Connected " + socket.id)
})

$(function(){
    let msglist = $('#message-list');
    let inp_message = $('#message');
    let send_button = $('#submit-button');
    let login_box = $('#login-box');
    let login_button = $('#login-button');
    let login_div = $('#login-div');
    let chat_div = $('#chat-div');
    let welcome_div = $('#welcome-message');
    let user_name;
    let welcome_user = $('#user-name');
    
    send_button.click(function(){
        socket.emit('send_msg',
        {
            message : inp_message.val(),
            user : user_name
        });
        inp_message.val('');
    });

    socket.on('rec_msg',function(data){
        console.log(data);
        msglist.append('<li>'+ data.user + " : " + data.message + '</li>');
    });

    login_button.click(function(){
        welcome_div.show();
        // Getting the user name from input
        user_name = login_box.val();
        // Showing the greeting message !
        welcome_user.text('Welcome '+user_name+" !");
        welcome_user.css("font-weight","Bold");
        
        login_box.val('');
        // Hidding the login div and showing the chat div
        chat_div.show();
        login_div.hide();
        console.log('Logged In.');

        // Emitting the user name (Emit here means sending some data to server side on login)
        socket.emit('login_data',user_name);
    });

})