import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
//import play from './play';

Vue.config.productionTip = false

//console.log(play);



new Vue({
  render: h => h(App),
}).$mount('#app')

