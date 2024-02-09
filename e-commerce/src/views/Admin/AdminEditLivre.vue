<script>
import { useLivresStore } from '../../stores';
import { mapActions, mapState } from 'pinia'

export default {
    name:"AdminEditLivre",
    data(){
        return {
                    id: "",
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
        //...mapActions(useUsersStore, ['updatelivre']),

        submitForm() {
            const livre = {
                id: this.getLivreToEdit.id,
                titre: this.titre,
                auteur: this.auteur,
                categorie: this.categorie,
                etat: this.etat,
                emplacement:{allee:this.allee,
                            etagere: this.etagere},
                img: this.img,
                nb_sortie: this.nb_sortie,
                description: this.description,
                short_descript: this.short_descript,   
            }
            this.updateLivre(livre)
            this.$router.push({name:'AdminTabLivres'})
        },
        ...mapActions(useLivresStore, ['updateLivre']),
        affImg() {
            const imgUrl = new URL("../../assets/img_livres/" + this.getLivreToEdit.img, import.meta.url).href
            return imgUrl
        } 
        
    },
    computed:{
        ...mapState(useLivresStore, ['getLivreToEdit'])
    },
    mounted() {
            const livre = this.getLivreToEdit
            console.log("totototot",this.getLivreToEdit)
            this.titre = livre.titre
            this.auteur = livre.auteur
            this.categorie = livre.categorie
            this.etat = livre.etat
            this.allee = livre.emplacement.allee
            this.etagere = livre.emplacement.etagere
            this.img = livre.img
            this.nb_sortie = livre.nb_sortie
            this.description = livre.description
            this.short_descript = livre.short_descript
            console.log(this.titre)
    }
}
</script>

<template>
    <div>
        <div class="titre-livre">
            <h2>Modification des livres</h2>
        </div>
        <div class="formulaire">
            <form @submit.prevent="EditForm">
                <div class="partie-haute-livre">
                    <div class="partie-un">
                    <h3>Informations du livre</h3>
                    <div>
                        <label for="titre">Titre :</label>
                        <input class="champs" type="text" name="titre" v-model="titre" required/>
                    </div>
                    <div>
                        <label for="auteur">Auteur :</label>
                        <input class="champs" type="text" name="auteur" v-model="auteur" required/>
                    </div>
                        <label for="categorie">Catégorie :</label>
                        <input class="champs" type="text" name="categorie" v-model="categorie" required/>
                    <div>
                        <label for="allee">Allée :</label>
                        <input class="champs" type="text" name="allee" v-model="allee" required/>
                    </div>
                    <div>
                        <label for="etagere">Etagère  : </label>
                        <input class="champs" type="text" name="etagere" v-model="etagere" required/>
                    </div>
                    <div>
                        <label for="nb_sortie">Nombre de sortie  : </label>
                        <input class="champs" type="text" name="nb_sortie" v-model="nb_sortie" required/>
                    </div>
                    <div>
                        <label for="description">description  : </label>
                        <textarea class="champs" type="text" name="description" v-model="description" required></textarea>
                    </div>
                    <div>
                        <label for="short_descript">Short description  : </label>
                        <textarea class="champs" type="text" name="short_descript" v-model="short_descript" required></textarea>
                    </div>
                    <div>
                        <label for="img">Importer une image : </label>
                        <input class="champs" type="file" name="img" required/>
                    </div>
                    </div>
                    <div class="partie-deux">
                        <img :src="affImg()" alt="img avatar profil" width="auto" height="auto">
                    </div>
                </div>
                <div class="etat-livre">
                    <label for="status">Modifier le status du livre :</label>
                    <select v-model="etat" required>
                        <h3>Ouvrir l'état du livre </h3>
                        <option value="bon-etat">Bon état</option>
                        <option value="moyennement abimé">Moyennement abîmé </option>
                        <option value="abimé">Abîme</option>
                    </select>
                </div>
                <button class="btn-vert" @click="submitForm()">Valider les modifications</button>
            </form>
        </div>
    </div>    
</template>

<style scoped>
.titre-livre{
    border: black solid 1px;
    background-color: cornflowerblue;
}
    div {
        margin: 2rem;
        text-align: center;
    }
.partie-haute-livre{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: black solid 1px
}
.partie-quatre{
    border: black solid 1px;
    text-align: center
}
.btn-vert{
    background-color: green;
    font-weight: bold;
    color:whitesmoke;
    border-radius: 5px;
}
.btn-rouge{
    background-color: red;
    font-weight: bold;
    color:whitesmoke;
    border-radius: 5px;
}
.etat-livre{
    text-align: center;
    border: black solid 1px
}
input,
select {
    margin :1rem;
}
</style>