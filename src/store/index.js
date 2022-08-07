import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    oddNumber (state) {
      return state.count % 2 === 1
    },

    evenNumber (state) {
      return state.count % 2 === 0
    }
  },
  mutations: {
    increment (state) {
      state.count += 1
    }
  },
  actions: {
    increment ({ commit, getters }) {
      commit('increment')
      if (getters.oddNumber) console.log('奇数です')
    }
  },
  modules: {
  }
})
