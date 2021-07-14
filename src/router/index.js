import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import contact from '@/pages/contact'
import blog from '@/pages/blog'
import writeBlog from '@/pages/blogs/writeBlog'
import cssq from '@/pages/blogs/cssq'
import essay from '@/pages/blogs/essay'
import developer from '@/pages/blogs/developer'
import fs from '@/pages/API/FileSystem-api'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: {
      	title: '首页'
      },
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pages/API/FileSystem-api',
      meta: {
      	title: 'FileSystem'
      },
      name: 'fs',
      component: fs,
      
    },
    {
      path: '/pages/blog',
      meta: {
      	title: '博客'
      },
      name: 'blog',
      component: blog,
      
    },
    {
      path: '/pages/blogs/writeBlog',
      meta: {
      	title: '开始写'
      },
      name: 'writeBlog',
      component: writeBlog,
      
    },
    {
      path: '/pages/blogs/cssq',
      meta: {
      	title: 'css集'
      },
      name: 'cssq',
      component: cssq,
      
    },
    {
      path: '/pages/blogs/essay',
      meta: {
      	title: '文章'
      },
      name: 'essay',
      component: essay,
      
    },
    {
      path: '/pages/blogs/developer',
      meta: {
      	title: '开发'
      },
      name: 'developer',
      component: developer,
      
    },
    {
      path: '/pages/contact',
      meta: {
      	title: '联系'
      },
      name: 'contact',
      component: contact
    }
  ]
})
