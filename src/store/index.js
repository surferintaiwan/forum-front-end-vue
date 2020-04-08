import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from '../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      },
      isAuthenticated: false,
      token: ''

  },
  mutations: {
    setCurrentUser (state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      },
      state.isAuthenticated = true,
      state.token = localStorage.getItem('token')

    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser({commit}) {
      try {
        // 呼叫userAPI.getCurrentUser()將response顯示出來
        const response = await userAPI.getCurrentUser()
        const {data, statusText} = response
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        commit('setCurrentUser', {
          id: data.id,
          name: data.name,
          email: data.email,
          image: data.image,
          isAdmin: data.isAdmin
        })

        return true
      } catch(error) {
        console.log('can not fetch user information')
        console.log('error', error)
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {
  }
})
