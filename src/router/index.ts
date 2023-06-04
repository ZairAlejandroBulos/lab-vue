import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: "map" */ '../views/MapView.vue')
  },
  {
    path: '/instrumentos',
    name: 'instrumentos',
    component: () => import(/* webpackChunkName: "instrumentos" */ '../views/InstrumentosView.vue')
  },
  {
    path: '/detalle/:id',
    name: 'detalle',
    component: () => import(/* webpackChunkName: "detalle" */ '../views/DetalleInstrumentoView.vue')
  },
  {
    path: '/grilla',
    name: 'grilla',
    component: () => import(/* webpackChunkName: "grilla" */ '../views/GrillaInstrumentoView.vue')
  },
  {
    path: '/form/:id',
    name: 'form',
    component: () => import(/* webpackChunkName: "form" */ '../views/FormInstrumentoView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
