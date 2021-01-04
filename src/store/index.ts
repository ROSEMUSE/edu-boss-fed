import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(window.localStorage.getItem('user') || 'null') //当前登录状态
  },
  mutations: {
    //修改容器
    setUser(state, payload) {
      state.user = JSON.parse(payload)
      //防止页面数据丢失
      //注意:本地存储只能字符串
      window.localStorage.setItem('user', payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
