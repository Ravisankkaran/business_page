// src/router/index.js
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HeroPage.vue'
import AboutPage from '@/components/AboutPage.vue'
import Resume from '@/components/ResumePage.vue'
import service from '@/components/ServicePage.vue'
import portfolio from '@/components/PortfolioPage.vue'
import contact from '@/components/ContactPage.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage
    },
    {
      path: '/Resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio
    },
    {
      path: '/contact',
      name:'contact',
      component :contact
    }
    // Add more routes here
  ]
  
})
