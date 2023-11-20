import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import  "./test/apiTest";
import { createRouter, createWebHistory } from 'vue-router'
import {routes} from "./route";




if(import.meta.env.DEV)
{
    const router = createRouter({
        history: createWebHistory(),
        routes: routes
    })
    createApp(App).use(router).mount('#app')
}
