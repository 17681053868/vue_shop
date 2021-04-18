import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 后台登录密码
    loginInfo: {
      username: 'user',
      password: '123456'
    },
    // 用于sessionStorage记录登录状态，设置导航守卫
    token: 'lishen111111'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
