const socket = io.connect('https://tranquil-sea-37230.herokuapp.com/');

function start(message) {
    socket.emit("message", message);
}
