import { defineStore } from 'pinia'
/* Importation des données depuis un fichier json - La conversion est automatique */
/* import products from "../data/productList.json" */
/* @ est un raccourcis pour partir du dossier src */
import users from "@/data/userList.json"

const STORE_NAME = 'users'
const STORE_LOCALE_STORAGE_KEY = 'users'

const getDefaultState = () => users
const getCurrentState = () => {
    const localeData = localStorage.getItem(STORE_LOCALE_STORAGE_KEY)
    return localeData ? JSON.parse(localeData) : getDefaultState()
}

export const useUsersStore = defineStore(STORE_NAME, {
    state: () => {
        return {
            users: getCurrentState(),
            currentUser : null,
        }
    },
    getters: {
        getUsers: (state) => state.users,
        getUserById: (state) => (id) => state.users.find(user => user.id == id),
        getCurrentUser: (state) => state.currentUser
    },
    actions: {
        updateLocaleStorage() {
            localStorage.setItem(STORE_LOCALE_STORAGE_KEY, JSON.stringify(this.users))
        },
        addUser(user) {
            this.users.push(user)
            this.updateLocaleStorage()
        },
        setCurrentUser (user){
            this.currentUser = user;
        }
    }
})