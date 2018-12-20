import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css'

Vue.use(Router)

const components = {
  layout:() =>import('../views/layout'),
  index:() =>import('../views/index/index'),
  register:() =>import('../views/register/index')
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component:components.layout,
      redirect:'/index',
      children:[
        {
          path: 'index',
          meta: {
            title:'云笔记首页'
          },
          component:components.index
        },
        {
          path: 'register',
          meta: {
            title:'注册'
          },
          component:components.register
        },
      ]
    }
  ]
})
router.beforeEach((to, from, next)=> {
  Nprogress.start()
  next()
})

router.afterEach((to, from) => {
  Nprogress.done()
})

