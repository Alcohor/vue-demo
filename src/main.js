import Vue from 'vue'
import App from './App.vue'

import '@styles/main.scss'//引入全局样式
import '@libs/flexible'//手淘移动端适配
import '@libs'
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
