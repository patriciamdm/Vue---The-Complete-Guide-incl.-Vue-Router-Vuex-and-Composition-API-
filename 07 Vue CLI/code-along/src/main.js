import { createApp } from 'vue'
import App from './App.vue'

//This configuration makes the component available globally
import NewFriend from './components/NewFriend.vue'

const app = createApp(App)

app.component('new-friend', NewFriend)
app.mount('#app')



//createApp(App).mount('#app')