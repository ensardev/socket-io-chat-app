var _express = require('express');
var _socket = require('socket.io');

var _app = _express();

_app.use(_express.static('public'));

var _server = _app.listen(3838, function(){
    console.log('Port : 3838 Dinleniyor.');
});

var _io = _socket(_server);

_io.on('connection', function(_socket){
    console.log('Socket Bağlantısı Yapıldı.', _socket.id);

    _socket.on('chat', function(data){
        _io.sockets.emit('chat', data);
    });

    _socket.on('typing', function(data){
        _socket.broadcast.emit('typing', data);
    });
})


