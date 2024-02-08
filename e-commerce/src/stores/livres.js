import { defineStore } from 'pinia'
import livres from '@/data/livreList.json'

const STORE_NAME = 'livres'
const STORE_LOCALE_STORAGE_KEY = 'livres'

const getDefaultState = () => livres
const getCurrentState = () => {
    const localeData = localStorage.getItem(STORE_LOCALE_STORAGE_KEY)
    return localeData ? JSON.parse(localeData) : getDefaultState()
}

export const useLivresStore = defineStore(STORE_NAME, {
    state: () => {
        return {
            livres: getCurrentState(),
            currentLivre : null,
            livreToEdit: null,
        }
    },
    getters: {
        getLivres: (state) => state.livres,
        getLivreById: (state) => (id) => state.livres.find(livre => livre.id == id),
        getLivreToEdit: (state) => state.livreToEdit
    },
    actions: {
        updateLocaleStorage() {
            localStorage.setItem(STORE_LOCALE_STORAGE_KEY, JSON.stringify(this.livres))
        },
        addLivre(livre) {
            this.livres.push(livre)
            this.updateLocaleStorage()
        },
        deleteLivre(livre) {
            this.livres = this.livres.filter(el => el.id != livre.id)
            this.updateLocaleStorage()
        },
        setLivreToEdit(livre) {
            this.livreToEdit = livre
            console.log(this.livreToEdit)
        },
        updateLivre(livre){
            const index = this.livres.findIndex(el => {
                return el.id === livre.id
            })
            this.livres[index] = livre
            this.updateLocaleStorage()
        }
        
    }
})