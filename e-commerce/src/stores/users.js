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
const localCurrentUser = () => {
    const localeDatax = localStorage.getItem("currentUser")
    return localeDatax ? JSON.parse(localeDatax) : null
}

export const useUsersStore = defineStore(STORE_NAME, {
    state: () => {
        return {
            users: getCurrentState(),
            currentUser : localCurrentUser(),
            userToEdit : null,
        }
    },
    getters: {
        getUsers: (state) => state.users,
        getUserById: (state) => (id) => state.users.find(user => user.id == id),
        getCurrentUser: (state) => state.currentUser,
        getUserToEdit: (state) => state.userToEdit
    },
    actions: {
        updateLocaleStorage() {
            localStorage.setItem(STORE_LOCALE_STORAGE_KEY, JSON.stringify(this.users))
        },
        addUser(user) {
            this.users.push(user)
            this.updateLocaleStorage()
        },
        deleteUser(user){
            this.users = this.users.filter(el => el.id != user.id)
            this.updateLocaleStorage()
        },
        setCurrentUser (user){
            this.currentUser = user;
            localStorage.setItem("currentUser", JSON.stringify(user))
        },
        setUserToEdit (user){
            this.userToEdit = user;
            console.log(this.userToEdit)
        },
        updateuser(user) {
            console.log("update in store", user)
            const index = this.users.findIndex(el => {
                return el.id === user.id
            })
            this.users[index] = user
            this.updateLocaleStorage()
        },
        updateAvatar(avatar) {
            this.UserToEdit.avatar = avatar
        }
    }
})


