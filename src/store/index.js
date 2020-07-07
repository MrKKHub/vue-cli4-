import Vue from 'vue'
import Vuex from 'vuex'
import personal from './personal'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowLoading: false
  },
  mutations: {
    showLoading (state, payload) {
      console.log(payload)
      state.isShowLoading = payload
    }
  },
  actions: {
  },
  modules: {
    personal
  }
})
