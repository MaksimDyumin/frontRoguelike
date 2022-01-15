<template> 
    <div class="chatForm"> 
        <message-list :messages="messages" />
        <message-form @send="sendMessage" />
    </div>
</template>

<script>

import MessageList from "./MessageList.vue"
import MessageForm from "./MessageForm.vue"
import { sendSocketMessage, socket } from "@/game/socketio"

export default {
    name: 'Chat',
    components: {
        MessageList: MessageList,
        MessageForm: MessageForm,
    },
    data() {
        return {
            messages: [

            ],
        }
    },
    methods:{
       sendMessage(message) {
            // this.messages.push(message);
            // message.token = 
            sendSocketMessage(socket, 'chatMessage', message)
       }
    },
    created() {
        socket.on('chatMessage', (message) => {
            this.messages.push(message);
        })
    }
}
</script>

<style>
.chatForm {
    width: 400px;
    height: auto;
    background-color: white;
    border: solid 2px;
}

</style>