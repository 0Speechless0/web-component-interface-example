// import './assets/main.css'


import { createApp } from 'vue'
import Index from './Index.vue'
import  "./test/apiTest";
import { createRouter, createWebHistory } from 'vue-router'
import {routes} from "./route";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


if(import.meta.env.DEV)
{
    const router = createRouter({
        history: createWebHistory(),
        routes: routes
    })
    createApp(Index).use(router).mount('#app')
}
