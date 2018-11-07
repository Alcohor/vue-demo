import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppHome from '@pages/home/AppHome'
import Detail from '@pages/detail/Detail'

const routes = [
    {
        path:'/',
        redirect:{name:'home'}
    },
    {
        path:'/home',
        name:'home',
        component : AppHome,
    },
    {
        path:'/detail',
        name:'detail',
        component : Detail,
    }
]

// 路由工具
const router = new VueRouter({
    mode: 'history', // hash
    // base: '/app/',
    routes
})


export default router
