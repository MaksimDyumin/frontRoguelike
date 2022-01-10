
import * as io from "socket.io-client";

const socket = io('http://server.diwos.ru/', {
// allowEIO3: true // false by default
})

socket.connect();

socket.on('hi', (message) => {

    console.log('in', message);
})

socket.on("error", (error) => {
console.log('in', error);
});

document.addEventListener('keydown', (event) => {
    sendSocketMessage( 'keydown', event.key );
});

function sendSocketMessage( action, data ) {

    const socketMessage = {};
    socketMessage.token = localStorage.getItem('token');
    socketMessage.action = action;
    socketMessage.data = data;

    console.log('out', socketMessage);
    socket.emit('message', socketMessage);

}

export {
    socket
}
