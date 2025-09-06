import { message } from "antd"
import axios, { type AxiosRequestConfig } from "axios"
import { globalErrorState } from "~/store"
// 扩展 Axios 配置类型
export interface CustomRequestConfig extends AxiosRequestConfig {
  silent?: boolean // 新增配置项，控制是否显示错误
}
function createBaseUrl() {
  let url = import.meta.env.VITE_AXIOS_BASEURL
  if (import.meta.env.MODE === 'development') {
    url = localStorage.getItem("baseURL") ?? url
  }
  return url
}

/** 全局请求实例配置 */
export const request = axios.create({
  baseURL: createBaseUrl(),
  timeout: 600000,
  timeoutErrorMessage: '请求超时 请稍后重试'
})

/** 请求拦截器 */
request.interceptors.request.use(config => {
  const userInfoStr = localStorage.getItem('userInfo')
  if (userInfoStr) {
    try {
      // 获取用户信息并添加token
      const userInfo = JSON.parse(userInfoStr)
      config.headers['Authorization-Token'] = userInfo.token
      config.headers.set('Priority', '')
    } catch {
      console.log(`用户信息转换失败`)
    }
  }
  return config
})

/** 响应拦截器 */
request.interceptors.response.use(response => {
  // 从响应配置中获取 no-message 头信息
  const noMessage = response.config.headers.get('no-message')
  const result = response.data
  if (result.status === 200) {
    return Promise.resolve(result.data)
  } else {
    // 未授权
    if (result.status === 401) {
      localStorage.removeItem("userInfo")
      location.href = `/login?redirectUrl=${encodeURIComponent(location.href)}`
      return Promise.reject(result)
    }
    // 如果请求配置中未设置 silent
    if (!(response.config as CustomRequestConfig).silent) {
      // 将错误信息存储到全局错误状态中
      globalErrorState.setError({
        content: result.message,
        requestUrl: response.request.responseURL,
        status: result.status,
        requestId: result.requestId,
        noMessage: !!noMessage
      })
    }
    return Promise.reject(result)
  }
}, error => {
  message.error(error?.message)
  return Promise.reject(error)
})