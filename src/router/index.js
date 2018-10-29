import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'views/Home.vue'
import main from 'views/layout/main.vue'


// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载

Vue.use(VueRouter)

const globalRoutes = []

// 主入口路由(需嵌套上左右整体布局)
const mainRoutes = {
  path: '/',
  component:main,
  name: 'main',
  redirect: { name: 'home' },
  meta: { title: '主入口整体布局' },
  children: [
    { path: '/home', component: Home},
  ],
}

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: __dirname,
  routes: globalRoutes.concat(mainRoutes)
})


export default router
