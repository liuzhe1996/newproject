import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './assets/css/general.less'
import 'element-ui/lib/theme-chalk/index.css';
import "../node_modules/swiper/dist/css/swiper.css";
import { formatMoney, formatNum, formatNumByValid, formatDataTime, toNumber, doubleDigit, toNonExponentials } from './assets/js/filters'
// Vue.filter('formatNumber', formatNum);
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')