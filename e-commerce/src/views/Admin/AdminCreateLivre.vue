<script>
import { mapActions } from 'pinia'
import { useLivresStore } from '../../stores'

    export default {
        name: "AdminCreateLivre",
        data() {
            return {
                    id: null,
                    titre: "",
                    auteur: "",
                    categorie: "",
                    etat: "",
                    allee:"",
                    etagere: "",
                    img: "",
                    nb_sortie: "",
                    description: "",
                    short_descript: ""
            }
        },
        methods: {
            submitLivre() {
                const book = {
                    id: Math.floor(Math.random() * Date.now()),
                    titre: this.titre,
                    auteur: this.auteur,
                    categorie: this.categorie,
                    etat: this.etat,
                    emplacement:{allee:this.allee,
                                etagere: this.etagere},
                    img: this.img,
                    nb_sortie: this.nb_sortie,
                    description: this.description,
                    short_descript: this.short_descript
                }
                this.addLivre(book)
                this.resetForm()
                },
                ...mapActions(useLivresStore, ['addLivre']),
                resetForm() {
                    this.titre = 'b'
                    this.auteur = ''
                    this.categorie = ''
                    this.etat =  null
                    this.allee = null
                    this.etagere = null
                    this.img = null
                    this.nb_sortie = null
                    this.description = null
                    this.short_descript = null
                    console.log(this.titre)
                    },
            },
        }
    
</script>

<template>
    <h1>Nouveau livre</h1>
    <div class="new-book">
        <form @submit.prevent="submitLivre">
            <div>
                <label for="titre">Titre </label>
                <input type="text" name="titre" v-model="titre" required/>
            </div>
            <div>
                <label for="auteur">Auteur </label>
                <input type="text" name="auteur" v-model="auteur" required/>
            </div>
            <div>
                <label for="categorie">Catégorie </label>
                <input type="text" name="categorie" v-model="categorie" required/>
            </div>
            <div>
                <label for="etat">Etat </label>
                <input type="text" name="etat" v-model="etat" required/>
            </div>
            <div>
                <label for="allee">Allée </label>
                <input type="text" name="allee" v-model="allee" required/>
            </div>
            <div>
                <label for="etagere">Etagère </label>
                <input type="text" name="etagere" v-model="etagere" required/>
            </div>
            <div>
                <label for="img">Image </label>
                <input type="file" accept=".jpeg, .png, .jpg, .gif" name="img" required/>
            </div>
            <div>
                <label for="nb_sortie">Nombre de sortie </label>
                <input type="text" name="titre" v-model="nb_sortie" required/>
            </div>
            <div>
                <label for="description">description </label>
                <input type="text" name="titre" v-model="description" required/>
            </div>
            <div>
                <label for="short_descript">Résumé </label>
                <input type="text" name="short_descript" v-model="short_descript" required/>
            </div>
            <button class="bouton" type="submit">Créer livre</button>
            <button
        class="btn btn-danger"
        type="button"
        @click="resetForm"
      >
        Reset
      </button>
        </form>

    </div>
</template>







<!-- "id": 1,
    "titre": "Titre du livre 1",
    "auteur":"auteur du livre 1",
    "categorie":"une catgeorie",
    "etat":"bon etat",
    "emplacement":{"allee":"science", "etagere":3},
    "img":"livre-par-defaut.jpg",
    "nb_sortie":20,
    "description":"chaine de caractère longue et complète",
    "short_descript": "le debut pitch du livre." -->