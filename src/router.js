import Vue from "vue";
import VueRouter from "vue-router";
import news from './components/news'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect:'/news/'},
    { path: '/news/', component: news}
]

const router = new VueRouter({
    routes
})

export default router;