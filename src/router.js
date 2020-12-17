import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from './components/Blog'
import BlogPreview from './components/BlogPreview'
import Login from './components/Login.vue'
import Register from './components/Register.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
    routes: [
  { path:'/', name:'home', component: Blog },
  { path: '/preview', component: BlogPreview},
  {
    path: '/login',
    name: 'login',
    component: Login
  }  ,
  {
    path: '/register',
    name: 'register',
    component: Register
  }
  ]
});

export default router;