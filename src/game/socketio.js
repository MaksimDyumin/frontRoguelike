
import * as io from "socket.io-client";

const socket = io('http://server.diwos.ru/', {
    extraHeaders: {
        Aasdfasdf: `asdfasdfasdf`,
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

socket.connect();

socket.on('hi', (message) => {

    console.log('in', message);
})

socket.on("error", (error) => {
console.log('in', error);
});

document.addEventListener('keydown', (event) => {
    sendSocketMoveMessage( 'keydown', event.code );
    // sendSocketMessage( 'keydown', event.code );
});

function sendSocketMoveMessage( action, data ) {

    const socketMessage = {};
    socketMessage.token = localStorage.getItem('token');
    socketMessage.action = action;
    socketMessage.data = data;

    console.log('out', socketMessage);
    socket.emit('message', socketMessage);

}

function sendSocketMessage ( socket, eventType, data ) {

    socket.emit(eventType, data);

}

export {
    socket,
    sendSocketMessage
}
