import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'

import AboutUs from '../pages/Detail/AboutUs'

import AMmachines from '../pages/AdvertiseProd/AMmachines'
import Billboards from '../pages/AdvertiseProd/Billboards'
import Exhibition from '../pages/AdvertiseProd/Exhibition'
import LEmachines from '../pages/AdvertiseProd/LEmachines'
import materials from '../pages/AdvertiseProd/materials'
import plotters from '../pages/AdvertiseProd/plotters'
import Printers from '../pages/AdvertiseProd/Printers'
import Routers from '../pages/AdvertiseProd/Routers'

import boxes from '../pages/LED/boxes'
import Screens from '../pages/LED/Screens'

import Balloons from '../pages/MetrDeal/Balloons'

import Magic from '../pages/ShowInfo/Magic'
import Photo from '../pages/ShowInfo/Photo'

import Indoor from '../pages/NewProd/Indoor'
import Decoration from '../pages/NewProd/Decoration'
import Outdoor from '../pages/NewProd/Outdoor'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        { path: '/', component: AboutUs },
        { path: '/home/AboutUs', component: AboutUs },
        { path: '/home/AMmachines', component: AMmachines },
        { path: '/home/Billboards', component: Billboards },
        { path: '/home/Exhibition', component: Exhibition },
        { path: '/home/LEmachines', component: LEmachines },
        { path: '/home/materials', component: materials },
        { path: '/home/plotters', component: plotters },
        { path: '/home/Printers', component: Printers },
        { path: '/home/Routers', component: Routers },
        { path: '/home/boxes', component: boxes },
        { path: '/home/Screens', component: Screens },
        { path: '/home/Balloons', component: Balloons },
        { path: '/home/Magic', component: Magic },
        { path: '/home/Photo', component: Photo },
        { path: '/home/Indoor', component: Indoor },
        { path: '/home/Decoration', component: Decoration },
        { path: '/home/Outdoor', component: Outdoor }

      ]

    }
    // {
    //   path: '/recent',
    //   name: 'recent',
    //   component: Recent
    // },
    // {
    //   path: '/guang',
    //   name: 'guang',
    //   component: Guang
    // },
    // {
    //   path: '/order',
    //   name: 'order',
    //   component: Order
    // },
    // {
    //   path: '/me',
    //   name: 'me',
    //   component: Me
    // }
  ]
})
