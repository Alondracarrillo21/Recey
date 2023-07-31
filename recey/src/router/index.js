import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardPage from '../views/DashboardPage.vue';
import EditarPage from '../views/EditarPage.vue';
import NuevoPage from '../views/NuevoPage.vue';
import AdmiPage from '../views/AdmiPage.vue';
import AdmiEdit from '../views/AdmiEdit.vue';
import AdmiNuevo from '../views/AdmiNuevo.vue';
import SideBar from '../components/sidebar/SideBar.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/DashboardPage',
    name: 'DashboardPage',
    component: DashboardPage
  },
  {
    path: '/EditarPage/:id',
    name: 'EditarPage',
    component: EditarPage
  },
  {
    path: '/NuevoPage',
    name: 'NuevoPage',
    component: NuevoPage
  },
  {
    path: '/AdmiPage',
    name: 'AdmiPage',
    component: AdmiPage
  },
  {
    path: '/AdmiEdit',
    name: 'AdmiEdit',
    component: AdmiEdit
  },
  {
    path: '/AdmiNuevo',
    name: 'AdmiNuevo',
    component: AdmiNuevo
  },
  {
    path: '/SideBar',
    name: 'SideBar',
    component: SideBar
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
