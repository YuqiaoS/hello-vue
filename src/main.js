import Vue from 'vue'
import './plugins/vuetify'
// import App from './App.vue'
//import play from './play';
import Layout from './Layout.vue'
Vue.config.productionTip = false

//console.log(play);

/* eslint-disable */

new Vue({
  render: h => h(Layout),
}).$mount('#app')

