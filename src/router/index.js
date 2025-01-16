import { auth } from '@/db/firebase'
import PerfilView from '@/views/perfilView.vue'
import registerView from '@/views/registerView.vue'
import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'register',
    component: registerView
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: PerfilView,
    props: (route) => ({ username: route.params.userName }),
    meta: {  requiresAuth: true}
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser

  if (to.matched.some(record => record.meta.requiresAuth) && !currentUser ) {
    next({name: "register"})
    return
  }

  next()
})

export default router
