const socket = io.connect('192.168.0.6');

function start(message) {
    socket.emit("message", message);
}
