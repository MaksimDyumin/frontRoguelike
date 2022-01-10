import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.use(router);


// import VueSocketIO from 'vue-socket.io'
// const vueSocketIO = new VueSocketIO({
//     debug: true,
//     connection: 'ws://server.diwos.ru:8080',
//     options: { path: "/websocket/" }
// })

// app.$socket = VueSocketIO;
// app.prototype = {}
// app.prototype.$socket = VueSocketIO;
// app.use(vueSocketIO);


app.mount('#app');