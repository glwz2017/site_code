import { createStore } from 'vuex'

export default createStore({
  state: {
    name: '淘宝'
  },
  mutations: {
    setVuexState (state) {
      state.name = '我是子组件改变的值'
    }
  },
  actions: {
    changeVuexState (store) {
      console.log('=====')
      store.commit('setVuexState')
    }
  }
})
