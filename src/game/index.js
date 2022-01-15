
import { Graphics } from './graphics.js'
import { socket } from './socketio.js';

const graphics = new  Graphics();

socket.on('world', (world) => {
    console.log('in', world);
    localStorage.setItem('mainObjects', JSON.stringify(world))

    if (world) {
        world.data.forEach(obj => {
            graphics.graphishDrawInfoUpdate(obj)
        });
    }
})
