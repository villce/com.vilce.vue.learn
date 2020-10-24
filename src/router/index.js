import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/home',
      component: Home
    },
    {
      // home页面并不需要被访问，只是作为其它组件的父组件
      path: '/home',
      name: 'Home',
      component: () => import('../components/Home')
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('../components/Home')
    },
    {
      path: '/tool',
      name: 'MarkTool',
      component: () => import('../components/home/tool/MarkTool')
    },
    {
      path: '/jotter',
      name: 'Jotter',
      component: () => import('../components/home/jotter/Articles')
    },
    {
      path: '/jotter/article',
      name: 'Article',
      component: () => import('../components/home/jotter/ArticleDetails')
    },
    {
      path: '/admin/content/editor',
      name: 'Editor',
      component: () => import('../components/admin/content/ArticleEditor'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/user/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../components/user/Register')
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../components/admin/AdminIndex'),
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/admin/dashboard',
          name: 'Dashboard',
          component: () => import('../components/admin/dashboard/admin/index'),
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '*',
      component: () => import('../components/pages/Error404')
    }
  ]
})

// 用于创建默认路由
export const createRouter = routes => new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/home',
      component: Home
    },
    {
      // home页面并不需要被访问，只是作为其它组件的父组件
      path: '/home',
      name: 'Home',
      component: () => import('../components/Home')
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('../components/Home')
    },
    {
      path: '/tool',
      name: 'MarkTool',
      component: () => import('../components/home/tool/MarkTool')
    },
    {
      path: '/jotter',
      name: 'Jotter',
      component: () => import('../components/home/jotter/Articles')
    },
    {
      path: '/jotter/article',
      name: 'Article',
      component: () => import('../components/home/jotter/ArticleDetails')
    },
    {
      path: '/admin/content/editor',
      name: 'Editor',
      component: () => import('../components/admin/content/ArticleEditor'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/user/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../components/user/Register')
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../components/admin/AdminIndex'),
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/admin/dashboard',
          name: 'Dashboard',
          component: () => import('../components/admin/dashboard/admin/index'),
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '*',
      component: () => import('../components/pages/Error404')
    }
  ]
})
