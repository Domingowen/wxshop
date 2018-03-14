import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/components/home')), 'home')
const ShopCart = r => require.ensure([], () => r(require('@/components/shop-cart')), 'shopcart')
const PersonCenter = r => require.ensure([], () => r(require('@/components/person-center/person-center')), 'person')
const Login = r => require.ensure([], () => r(require('@/components/login/login')), 'login')
const ProductDetail = r => require.ensure([], () => r(require('@/components/product-detail/product-detail')), 'productdetail')
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
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: ShopCart,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/personcenter',
      name: 'personcenter',
      component: PersonCenter,
      meta: {
        requiresLogin: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/product',
      name: 'product',
      component: ProductDetail,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
