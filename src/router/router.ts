import Home from "@/components/pages/Home.vue";
import Projects from "@/components/pages/Projects.vue";
import Awards from "@/components/pages/Awards.vue";
import Contacts from "@/components/pages/Contacts.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: Home,
    },
    /*     {
        path: "/projects",
        component: Projects,
    },
    {
        path: "/awards",
        component: Awards,
    },
    {
        path: "/contacts",
        component: Contacts,
    }, */
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});

export default router;
