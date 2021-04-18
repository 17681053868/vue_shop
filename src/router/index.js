import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  // 路由重定向到login组件
  redirect: '/login'
}, {
  path: '/login',
  component: Login
}, {
  path: '/home',
  component: Home
}]

const router = new VueRouter({
  routes
})

// 设置路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转
  // 如果用户访问登录页，直接放行
  if (to.path === '/login') return next()
  // 从sessionStorage中获取保存的token值
  const tokenStr = window.sessionStorage.getItem('token')
  // 如果没有找到token值则强制跳转到登录页，有则直接放行
  if (!tokenStr) return next('/login')
  next()
})

export default router
