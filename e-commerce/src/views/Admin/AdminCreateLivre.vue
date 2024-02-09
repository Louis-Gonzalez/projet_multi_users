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
                handleFileUpload(){
                    const urlImg = this.$refs.img.files[0];
                    this.img = urlImg.name
                    console.log( this.$refs.img)
                },
                ...mapActions(useLivresStore, ['addLivre']),
                resetForm() {
                    this.titre = ''
                    this.auteur = ''
                    this.categorie = ''
                    this.etat =  null
                    this.allee = null
                    this.etagere = null
                    this.img = null
                    this.nb_sortie = null
                    this.description = null
                    this.short_descript = null
                    },
            },
        }
    
</script>

<template>
    
    <div class="new-book">
        <div class="titre-nouveau-livre">
            <h1>Nouveau livre</h1>
        </div>
        <form @submit.prevent="submitLivre">
            <div>
                <label for="titre">Titre : </label>
                <input type="text" name="titre" v-model="titre" required/>
            </div>
            <div>
                <label for="auteur">Auteur :</label>
                <input type="text" name="auteur" v-model="auteur" required/>
            </div>
            <div>
                <label for="categorie">Catégorie : </label>
                <input type="text" name="categorie" v-model="categorie" required/>
            </div>
            <div class="status">
                        <label for="status">Etat du livre :</label>
                        <select v-model="etat" required>
                            <h3>Ouvrir l'état du livre </h3>
                            <option value="bon-etat">Bon état</option>
                            <option value="moyennement-abime">Moyennement abîmé </option>
                            <option value="abime">Abîme</option>
                        </select>
            </div>
            <div>
                <label for="allee">Allée :</label>
                <input type="text" name="allee" v-model="allee" required/>
            </div>
            <div>
                <label for="etagere">Etagère : </label>
                <input type="text" name="etagere" v-model="etagere" required/>
            </div>
            <div>
                <label for="img">Image : </label>
                <input type="file" accept=".jpeg, .png, .jpg, .gif" name="img" ref="img" @change="handleFileUpload()" required/>
            </div>
            <div>
                <label for="nb_sortie">Nombre de sortie :</label>
                <input type="text" name="titre" v-model="nb_sortie" required/>
            </div>
            <div>
                <label for="description">description :</label>
                <textarea type="text" name="titre" v-model="description" required></textarea>
            </div>
            <div>
                <label for="short_descript">Résumé :</label>
                <textarea type="text" name="short_descript" v-model="short_descript" required></textarea>
            </div>
            <div class="btn">
                <div>
                    <button class="btn-vert" type="submit">Créer livre</button>
                </div>
                <div>
                    <button
                    class="btn btn-danger"
                    type="button"
                    @click="resetForm"
                    >
                    Reset
                    </button>
                </div>
            </div>
        </form>

    </div>
</template>


<style scoped>
input,
select {
    margin :1rem;
}
.btn{
display: flex;
flex-wrap: wrap;
justify-content: space-around;
}

.new-book{
    text-align: center;
    border: black solid 1px;
}
.titre-nouveau-livre{
    background-color: cornflowerblue;
    border: black solid 1px;
}
.btn-vert{
    background-color: green;
    padding : 5px;
    color:whitesmoke;
    border-radius: 5px;
}
</style>




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