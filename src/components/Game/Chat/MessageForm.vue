<template> 
   <div> 
        <input v-model="message.text" class="messageInput" type="text" name="message" placeholder="Сообщение..." />
        <input @click="sendMessage" class="messageButton" type="submit" value="Отправить" />
    </div>
</template>

<script>
export default {
    name: "MessageForm",
    data() {
        return {
           message: {
               id: '',
               text: '',
           }
        }
    },
    methods:{
       sendMessage() {
           this.message.id = Date.now()
           this.$emit('send', this.message)
        //    this.message = {
        //        text: '',
        //    }
       }
    },
}
</script>

<style>

</style>