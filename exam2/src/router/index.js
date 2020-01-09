import Vue from 'vue'
import VueRouter from 'vue-router'
import AlbumManger from '../views/AlbumManger'
import Bugs from '../views/Bugs'
import Save from '../views/Save'
import Mocha from '../views/Mocha'
import HttpRequest from '../views/HttpRequest'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'albumManager',
    component: AlbumManger
  },
  {
    path: '/bugs',
    name: 'bugs',
    component: Bugs
  },
  {
    path: '/save',
    name: 'save',
    component: Save
  },
  {
    path: '/mocha',
    name: 'mocha',
    component: Mocha
  },
  {
    path: '/httpRequest',
    name: 'httpRequest',
    component: HttpRequest
  }
]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
