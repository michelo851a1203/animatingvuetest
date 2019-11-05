import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from '@/components/pages/home.vue'
import test from '@/components/pages/test.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: '首頁',
            component: home
        },
        {
            path: '/test',
            name: '測試頁',
            component: test
        }
    ]
})