import Vue from 'vue'
import Router from 'vue-router'
import LoginRegister from '@/views/LoginRegister'
import Home from '@/views/Home'
import ErrorPage from '@/components/errorPage/ErrorPage'

Vue.use(Router)

const routes = new Router({
  mode: 'history',
  // mode: 'hash',
  // mode: 'abstract',
  routes: [
    {
      path: '/verify_code',
      meta: {
        title: '邮箱验证'
      },
      name: 'VerifyCode',
      component: () => import('../views/VerifyCode')
      // 单个路由鉴权
      // beforeEnter: (to, from, next) => {
      //   // 获取是否登录权限 store 状态
      //   if (window.localStorage.getItem('token')) {
      //     next()
      //   } else {
      //     next('/login_register')
      //   }
      // }
    },
    {
      path: '/login_register',
      meta: {
        title: '登录注册'
      },
      name: 'LoginResister',
      component: LoginRegister
    }, {
      path: '/',
      meta: {
        title: '首页'
      },
      name: 'Index',
      component: Home
    },
    {
      path: '*',
      meta: {
        title: 'errorPage'
      },
      component: ErrorPage
    }
  ]
})

// 路由守卫
routes.beforeEach((to, from, next) => {
  if (to.path === '/login_register' || to.path === '/' || to.path === '/verify_code') {
    next()
  }
  if (to.meta.auth) {
    const token = window.localStorage.getItem('token') || ''
    if (token === '' || token === undefined) {
      next('/login_register')
    } else {
      next()
    }
  }
})

export default routes
