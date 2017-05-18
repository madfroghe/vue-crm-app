// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { LoadingPlugin} from 'vux'

Vue.config.productionTip = false

Vue.use(LoadingPlugin)

const FastClick = require('../static/fastclick/fastclick.js')
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})