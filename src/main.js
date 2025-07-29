import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import UncraftingTable from "@/pages/UncraftingTable.vue";
import CommonConfig from "@/pages/CommonConfig.vue";
import PerItemExpConfig from "@/pages/PerItemExpConfig.vue";

const routes = [
    { path: '/Home', component: Home },
    { path: '/UncraftingTable', component: UncraftingTable },
    { path: '/CommonConfig', component: CommonConfig },
    { path: '/PerItemExpConfig', component: PerItemExpConfig },
    { path: '/:pathMatch(.*)*', redirect: '/Home' },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');
