export default {
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    increment (state, payload) {
      state.count += payload
    }
  },
  actions: {}
}
