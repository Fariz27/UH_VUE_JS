import Vue from 'vue'
import VueRouter from 'vue-router'
import Beranda from '../views/Beranda.vue'
import DataMakanan from '../views/DataMakanan.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Sidebar from '../views/layouts/Sidebar.vue'
import Footer from '../views/layouts/Footer.vue'
import Pembelian from '../views/Pembelian.vue'
import DataKantin from '../views/DataKantin.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'beranda',
    components: {default: Beranda, header: Navbar, sidebar: Sidebar, footer: Footer}
  },
  {
    path: '/makanan',
    name: 'makanan',
    components: {default: DataMakanan, header: Navbar, sidebar: Sidebar, footer: Footer}
  },
  {
    path: '/kantin',
    name: 'kantin',
    components: {default: DataKantin, header: Navbar, sidebar: Sidebar, footer: Footer}
  },
  {
    path: '/pembelian',
    name: 'pembelian',
    components: {default: Pembelian, header: Navbar, sidebar: Sidebar, footer: Footer}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
