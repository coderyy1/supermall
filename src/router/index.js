import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/Cart/cart.vue')
const Profile = () => import('views/profile/Profile.vue')
const Detail = () => import('views/detail/Detail.vue')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    // name: 'Home',
    component: Home
  },
  {
    path: '/category',
    // name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    // name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    // name: 'Profile',
    component: Profile
  },
  {
    path: '/detail/:id',
    // name: 'Detail',
    component: Detail
  }

]

const router = new Router({
  routes,
  mode: 'history',
  base: '/dist'
})


export default router