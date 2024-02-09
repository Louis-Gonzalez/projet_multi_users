import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import FormRegister from '../components/Form/FormRegister.vue'
// Importer un fichier JSON contenant les routes du site
import LoginPage from '../views/LoginPage.vue'
import sitemap from '../data/routesList.json'

import HomeLocationPage from '../components/Location/HomeLocationPage.vue'
import { LivreListe } from '../components'
import { HomeAdminPage } from '../components'
import { AdminCreateLivre } from '../components'
import AdminTabLivres from '../views/Admin/AdminTabLivres.vue'
import AdminEditLivre from '../views/Admin/AdminEditLivre.vue'
import  AdminEditUser  from '../views/Admin/AdminEditUser.vue'
import AdminTabUsers from '../views/Admin/AdminTabUsers.vue'


// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    {
        path: '/homepage', 
        redirect: '/'
    },
    {
        name:  "HomePage",
        path: '/', 
        component: HomePage,
        alias: ['/home', '/chewbaka']
    },
    {
        name:  "LoginPage",
        path: '/login', 
        component: LoginPage,
    },
    {
        name:  "RegisterPage",
        path: '/register', 
        component: FormRegister,
    },
    {
        name: "LocationPage",
        path: '/location',
        component: HomeLocationPage,
    },
    {
        name: "LivreListe",
        path: '/livreliste/:categorie',
        component:LivreListe,
    },
    {
        name: "HomeAdminPage",
        path: '/admin',
        component:HomeAdminPage,
    },
    {

        name: "AdminCreateLivre",
        path: "/admin/createlivres",
        component: AdminCreateLivre
    },
    {

        name: "AdminTabLivres",
        path: "/admin/admintablivres",
        component: AdminTabLivres
    },
    {
        name: "AdminEditLivre",
        path: "/admin/admineditlivre",
        component: AdminEditLivre
    },
    {
        name: "AdminEditUser",
        path: '/admin/adminedituser',
        component: AdminEditUser,
    },
    {
        name: "AdminTabUsers",
        path: '/admin/admintabusers',
        component: AdminTabUsers,
    }
]

/* SCRIPT  */
sitemap.forEach(el => {
    let newRoute = setRoute(el)
    routes.push(newRoute)
});

// Cette fonction permet de s'assurer que le chemin d'import pour le composant
// commemence par un '/'
function sanitizeRoutePath(path) {
    return path[0] != '/' ?  path = '/' + path : path
}  
function setRoute(el, level = null) {
    let newRoute = {
        path: sanitizeRoutePath(el.path),
        component: () => import(/* @vite-ignore */ `../views/${el.component}`),
        name: el.name,
        props: { name: el.name, uuid: el.uuid },
        meta: el.meta ? el.meta : null,
        params: el.params ? el.params : null,
        query: el.query ? el.query : null,
        hash: el.hash ? el.hash : null,
        sensitive: el.sensitive ? el.sensitive : false,
        strict: el.strict ? el.strict : false,
        alias: el.alias ? el.alias : [],
        redirect: el.redirect ? el.redirect : null
    }
    if (level == null) {
        newRoute.children = el.children ? getChildrenData(el.children) : null
    }
    return newRoute
}
function getChildrenData(children) {
    const childrensArray = []
    children.forEach(el=> {
        let childRoute = setRoute(el, "children")
        childrensArray.push(childRoute)
    })
    return childrensArray
}

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // Provide the history implementation to use.
    history: createWebHistory(import.meta.env.BASE_URL),
    routes, // short for `routes: routes`
})

export default router