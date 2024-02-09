<script>
    import { mapState, mapActions } from 'pinia';
    import { useLivresStore } from '@/stores';

    export default {
        name: "AdminTabLivres",
        data() {
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
        computed: {
            ...mapState(useLivresStore, ["getLivres"]),
        },
        methods: {
            ...mapActions(useLivresStore, ["addLivre", "updateLocaleStorage", "deleteLivre", "setLivreToEdit"]),
            getTabLivres() {
                const tabLivres = this.getLivres;
                console.log(this.getLivres);
                return tabLivres
            },
            editLivre(livre) {
                this.setLivreToEdit(livre)
                this.$router.push({name: 'AdminEditLivre'})
            },

        }
    }
</script>


<template>
    <div>
        <div  class="titre-tab">
            <h2>Tableau des livres</h2>
        </div>    
        <div class="tab">
            <table>
                <thead>
                    <tr>
                        <th class="titre-col">Id</th>
                        <th class="titre-col">Titre</th>
                        <th class="titre-col">Auteur</th>
                        <th class="titre-col">Catégorie</th>
                        <th class="titre-col">etat</th>
                        <th class="titre-col">Image</th>
                        <th class="titre-col">Nombre de sortie</th>
                        <th class="titre-col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in getTabLivres()"
                        >
                        <td class="size-id">{{item.id}}</td>
                        <td>{{item.titre}}</td>
                        <td>{{item.auteur}}</td>
                        <td>{{item.categorie}}</td>
                        <td>{{item.etat}}</td>
                        <td>{{item.img}}</td>
                        <td>{{item.nb_sortie}}</td>
                        <td>
                            <button class="btn-bleu" @click="editLivre(item)">Editer</button>
                            <button class="btn-rouge" @click="deleteLivre(item)">Supprimer</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
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
.btn-bleu{
    background-color: blue;
    font-weight: bold;
    color:whitesmoke;
    border-radius: 5px;
}
.tab{
    width: 100%;
    border:black solid 1px;
}
.titre-col{
    font-weight: bold;
}
.titre-tab{
    background-color: cornflowerblue;
    color: black;
    border: black solid 1px;
}
th,
td{
    text-align: center;
    width: 15%;
    padding: 1rem;
}
.size-id{
    width: 3%;
}
h2{
    text-align: center;
}

</style>