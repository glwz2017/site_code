import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  count: '798456456'
}
const mutations = {
  setToken () {
    return 'token'
  }
}
export default new Vuex.Store({
  state,
  mutations
})
