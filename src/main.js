import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)


// main.js是程序入口

// 取消重复replace的报错问题
const originalPush = router.replace;
router.replace = function replace(location) {
    return originalPush.call(this, location).catch(err => err)
};

// 使用插件
Vue.use(toast)

// 解决移动端的300ms延迟
FastClick.attach(document.body)

// 使用vue-lazyload
Vue.use(VueLazyLoad, {
  loading: require('assets/img/profile/quin.jpg')
})


Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, store,
  render: h => h(App)
})
