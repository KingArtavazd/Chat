var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io') (server);
var messages = [];

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
    for(var i in messages) {
        io.sockets.emit("display message", messages[i]);
    }
    socket.on("send message", function (data) {
        messages.push(data);
        io.sockets.emit("display message", data);
    })
});

var fs = require('fs');

var obj = 
{
    "username": "Vardan",
    "last_name": "Hovsepyan",
    "age": 13,
    "tumo_student": true
}

function main() {
    var JSO = JSON.stringify(obj);
    fs.writeFileSync("obj.json", JSO);
}

main();