import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { createStore } from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import 'src/icons'
import 'src/assets/css/index.less'


Vue.prototype.$echarts = echarts


Vue.use(ElementUI)

export function createApp () {
   const store = createStore()


  // 同步路由状态(route state)到 store
  sync(store, router)


  // 创建应用程序实例，将 router 和 store 注入
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  // 暴露 app, router 和 store。
  return {app, router, store}
}
