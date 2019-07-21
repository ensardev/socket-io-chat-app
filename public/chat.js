var _socket = io.connect('http://localhost:3838');

var message = document.getElementById('message');
var name = document.getElementById('username');
var send = document.getElementById('send-button');
var output = document.getElementById('chat-output');
var typing = document.getElementById('typing');
var online = document.getElementById('online-users');

send.addEventListener('click', function(){
    _socket.emit('chat', {
        name:username.value,
        message:message.value
    });

    message.value = "";
});


message.addEventListener('keypress', function(){
    _socket.emit('typing', username.value);
})

_socket.on('chat', function(data){
    typing.innerHTML = "";
    output.innerHTML+='<p><strong>'+data.name+' : </strong>'+data.message+'</p>';
});

_socket.on('typing', function(data){
    typing.innerHTML='<p><em>'+ data +'  typing... </em></p>';
});
