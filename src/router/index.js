import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WhatWeDo from '../views/WhatWeDo.vue'
import WhoWeAre from '../views/WhoWeAre.vue'
import GetInTouch from '../views/GetInTouch.vue'
import CompanyNews from '../views/CompanyNews.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/whatWeDo',
    name: 'WhatWeDo',
    component: WhatWeDo
  },
  {
    path: '/whoWeAre',
    name: 'WhoWeAre',
    component: WhoWeAre
  },
  {
    path: '/getInTouch',
    name: 'GetInTouch',
    component: GetInTouch
  },
  {
    path: '/companyNews',
    name: 'CompanyNews',
    component: CompanyNews
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
