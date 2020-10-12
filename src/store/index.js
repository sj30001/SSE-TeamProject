import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    user: window.sessionStorage.getItem('user'),
    token:window.sessionStorage.getItem('token')
}
const mutations = {
    SET_TOKEN: (state,data) => {
        state.token = data
        window.sessionStorage.setItem('token',data)
    },
    GET_USER:(state,data) => {
        state.user = data
        window.sessionStorage.setItem('user',data)
    },
    LOGOUT:(state) => {
        state.token = null
        state.user = null
        window.sessionStorage.removeItem('token')
        window.sessionStorage.removeItem('user')
    }
}

const actions = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions
})