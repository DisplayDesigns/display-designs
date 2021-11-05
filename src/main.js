import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import VideoBackground from 'vue-responsive-video-background-player'
import App from './App.vue'
import router from './router'
import store from './store'

library.add(fas, fab)

createApp(App).component('video-background', VideoBackground).component('fa', FontAwesomeIcon).use(store).use(router).mount('#app')
