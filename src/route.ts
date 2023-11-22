import App from './App.vue'
import SelectionPage from "./test/page/SelectionPage.vue"

export const routes  = [
    {
        path: "/",
        name: "App",
        component: App
    },
    {
        path: "/P1",
        name: "P1",
        component: SelectionPage
    }
]