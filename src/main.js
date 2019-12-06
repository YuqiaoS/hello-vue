import Vue from 'vue'
import './plugins/vuetify'
// import App from './App.vue'
//import play from './play';
import Layout from './Layout.vue'
Vue.config.productionTip = false

// socketio 
// const socket = io('http://127.0.0.1:5000')

// Vue.config.productionTip = false

// Vue.use(
//   new VueSocketIO({
//     debug:true,
//     connection: socket
//   })
// ) 

/* eslint-disable */

new Vue({
  render: h => h(Layout),
}).$mount('#app')

