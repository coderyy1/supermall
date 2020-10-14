import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'


// 取消重复replace的报错问题
const originalPush = router.replace;
router.replace = function replace(location) {
    return originalPush.call(this, location).catch(err => err)
};


Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, store,
  render: h => h(App)
})
