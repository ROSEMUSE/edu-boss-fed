import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import router from '@/router'
import qs from 'qs'

const request = axios.create({
  // 配置选项
  baseURL:process.env.VUE_APP_BASE_FRONT
  // timeout
})

function redirectLogin() {
  router.push({
    name: 'login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

function refreshToken() {
  return axios.create({baseURL:process.env.VUE_APP_BASE_FRONT})({
    method: 'POST',
    url: '/front/user/refresh_token',
    data: qs.stringify({
      // refresh_token 只能使用1次
      refreshtoken: store.state.user.refresh_token
    })
  })
}

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  //注意：这里一定要返回config，否则就发送不出去了
  const { user } = store.state
  if (user && user.access_token) {
    config.headers.Authorization = user.access_token
  }

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});



// 响应拦截器
// 添加响应拦截器
let isRfreshing = false // 控制刷新 token 的状态
let requests: any[] = [] // 存储刷新 token 期间过来的 401 请求
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  //如果是自定义错误状态码，错误处理
  if(response.data.code === "10000"){
    Message.error(response.data.mesg)
  }
  
  return response;
}, function (error) {
  // 对响应错误做点什么
  //如果http 状态码 错误处理在此
  console.log(error);
  if (error.response) {
    const { status } = error.response
    if (status === 400) {
      Message.error("请求参数错误")
    } else if (status === 401) {
      //token无效 (没有提供token token无效 过期)
      // 如果有 refresh_token 则尝试使用 refresh_token 获取新的 access_token
      if (!store.state.user) {
        redirectLogin()
        return Promise.reject(error)
      }

      // 刷新 token
      if (!isRfreshing) {
        isRfreshing = true // 开启刷新状态
        // 尝试刷新获取新的 token
        return refreshToken().then(res => {
          if (!res.data.success) {
            throw new Error('刷新 Token 失败')
          }

          // 刷新 token 成功了
          store.commit('setUser', res.data.content)
          // 把 requests 队列中的请求重新发出去
          requests.forEach(cb => cb())
          // 重置 requests 数组
          requests = []
          return request(error.config)
        }).catch(err => {
          console.log(err)
          Message.warning('登录已过期，请重新登录')
          store.commit('setUser', null)
          redirectLogin()
          return Promise.reject(error)
        }).finally(() => {
          isRfreshing = false // 重置刷新状态
        })
      }

      // 刷新状态下，把请求挂起放到 requests 数组中
      return new Promise(resolve => {
        requests.push(() => {
          resolve(request(error.config))
        })
      })


    } else if (status === 403) {
      Message.error("没有权限，请联系管理员")
    } else if (status == 404) {
      Message.error("资源不存在")
    } else if (status >= 500) {
      Message.error("服务端错误，请联系管理员")
    }
  } else if (error.request) {
    Message.error('请求超时，请刷新重试')
  } else {
    Message.error(`请求失败：${error.message}`)
  }


  return Promise.reject(error);
});
export default request
