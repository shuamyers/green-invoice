import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { User } from '@/store/user'

Vue.use(Vuex)

const baseUrl = 'http://localhost:8080/api/v1'
const loginURl = '/account/login'

export enum MutationsEnum {
  SET_USER = 'SET_USER',
}

export enum ActionsEnum {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export enum GettersEnum {
  USER = 'USER',
}

export default new Vuex.Store({
  state: {
    user: null
  },

  mutations: {
    [MutationsEnum.SET_USER] (state, { user }) {
      state.user = user
    }
  },

  actions: {
    async [ActionsEnum.LOGIN] ({ commit }, userCredentials): Promise<User | undefined> {
      try {
        const { data } = await axios.post(baseUrl + loginURl, userCredentials)
        commit({
          type: MutationsEnum.SET_USER,
          user: data
        })
        return data as Promise<User>
      } catch (err) {
        console.log('err', err)
      }
    },
    [ActionsEnum.LOGOUT] ({ commit }) {
      commit({
        type: MutationsEnum.SET_USER,
        user: null
      })
    }
  },

  getters: {
    [GettersEnum.USER]: (state) => {
      return state.user
    }
  }
})
