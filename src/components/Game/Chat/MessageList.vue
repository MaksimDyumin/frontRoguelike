<template> 
   <div class="messageList"> 
        <div  v-for="message in messages" :key="message.id"> 
            <span>{{message.text}}</span>
        </div>
   </div>
</template>

<script>
export default {
    name: "MessageList",
    props: {
        messages: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

.messageList {
    height: 200px;
    background-color: rgb(218, 218, 218);
    overflow-y: scroll;
}

</style>