import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstName: '',
    lastName: '',
    items:[]
  },
  getters: {
    getfirstName (state){
      return state.firstName
    },
    getlastName (state) {
      return state.lastName
    }
  },
  mutations: {
    setfirstName (state, value){
      state.firstName=value
    },
    setlastName (state, value){
      state.lastName=value
    }
  },
  actions: {
    setfirstNameAction ({commit}, value){
      commit('setfirstName',value)
    },
    setlastNameAction ({commit}, value){
      commit('setlastName', value)
    }
  }
})
