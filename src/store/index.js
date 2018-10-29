// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      count: 0,
      getClientHeight:0,
      sidebarFold: false,
    },
    getters: {
      getCount: state => state.count
    },

    mutations: {
      INCREMENT: (state) => {
        state.count++
      },
      DECREMENT: (state) => {
        state.count--
      },
      UPDATE_CLIENT_height :(state,obj) =>{
      	state.getClientHeight = obj
      },
      UPDATE_SIDEBAR_FOLD :(state,obj) =>{
      	state.sidebarFold = obj
      },
    },
    actions: {
      increment({ state, commit }) {
        commit('INCREMENT')
      },
      decrement({ state, commit }) {
        commit('DECREMENT')
      },
      updateClientHeight({ commit}, obj) {
      	commit('UPDATE_CLIENT_height', obj);
      },
      updateSidebarFold({ commit}, obj) {
      	commit('UPDATE_SIDEBAR_FOLD', obj);
      }
    }
  })
}
