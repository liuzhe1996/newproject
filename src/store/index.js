import Vue from 'vue'
import Vuex from 'vuex'
import countAbout from './countOption'
import personAbout from './personOption'
Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    countAbout,
    personAbout
  }
})