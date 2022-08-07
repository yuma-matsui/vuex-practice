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
    },

    matchString (state) {
      return (string) => {
        return String(state.count) === string
      }
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
