<script>
import {useLivresStore} from '@/stores';
import {mapState, mapActions} from 'pinia';



console.log("livres")

export default {
    name:"HomeLocationPage",
    data(){
        return 
    },
    computed: {
        ...mapState(useLivresStore, ['getLivres']), // recupère le tableau des livres depuis le store
        
    },
    props: {


    },
    methods: {
        filterCatListeLivre (){

        },
        getFourLivre() {
            const arr = this.getLivres;
            let largest = arr[0]; // celui qui est le plus sortie est à l'indice 0
            let secondLargest = -Infinity;
            let thirdLargest = -Infinity;
            let fourthLargest = -Infinity;
            // on parcourt le tableau arr et on ordonne par le nb de sortie
            for (let i = 1; i < arr.length; i++) {
                if (arr[i].nb_sortie > largest.nb_sortie) {
                    fourthLargest = thirdLargest;
                    thirdLargest = secondLargest;
                    secondLargest = largest;
                    largest = arr[i];
                } else if (arr[i].nb_sortie > secondLargest.nb_sortie) {
                    fourthLargest = thirdLargest;
                    thirdLargest = secondLargest;
                    secondLargest = arr[i];
                }
                else if(arr[i].nb_sortie < secondLargest.nb_sortie && arr[i].nb_sortie > thirdLargest.nb_sortie){
                    fourthLargest = thirdLargest;
                    thirdLargest = arr[i];
                }
                else if(arr[i].nb_sortie < thirdLargest.nb_sortie && arr[i].nb_sortie > fourthLargest.nb_sortie){
                    fourthLargest = arr[i];
                }
            }
        return [largest,secondLargest, thirdLargest, fourthLargest];
        },
        affImg(livre) {
        const imgUrl = new URL("../../assets/img_livres/" + livre.img, import.meta.url).href
        return imgUrl
        },
        
    }
}

</script>

<template>
    <div>
        <div class="header-location-page">
            <div class="recherche-categorie">
                <label class="" for="choixCategorie"></label>
                <select id="categorie" class="">
                    <option value="fiction_populaire">fiction populaire</option>
                    <option value="roman">roman</option>
                    <option value="tragedie">tragédie</option>
                    <option value="jeunesse">jeunesse</option>
                    <option value="sychologie">psychologie</option>
                    <option value="strategie_militaire">stratégie militaire</option>
                </select>
                <button type="submit"
                @submit.prevent="afficherListeLivre"
                class="btn-vert"
                >Rechercher</button>
            </div>
            <div class="barre-recherche">
                    <input id="searchbar" onkeyup="search_categorie()" type="text"
                    name="search" placeholder="Rechercher par categorie..">
                    <button type="submit"
                    @submit.prevent="filterCatListeLivre"
                    class="btn-vert"
                    >Rechercher</button>
            </div>
        </div>
        <h2>Le top 4 des locations</h2>
        <div class="body-location-page">
            <div class="card-livre"
                v-for = " item in getFourLivre()"
                        :keys = "item.id">
                <div class="img-livre">
                    <img :src=affImg(item) alt="toto" class="img-fluid">
                </div>
                <div class="description-livre">
                    <h2 class="titre-livre">{{ item.titre }}</h2>
                    <div>
                        <h4>Description</h4>
                        <p>{{item.short_descript}}</p>
                        <button class="btn-livre">Aller au livre</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn-vert{
    background-color: green;
    font-weight: bold;
    color: beige;
    border-radius: 5px;
}
.header-location-page{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

}
img {
    width: 12rem;
    height: auto;
}
.body-location-page{
    margin: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
h2 {
    text-align: center;
    font-weight: bold;
    margin: 1rem;
    margin-top: 4rem
}
.titre-livre{
    font-size: 95%;
    color: blue;
}
.card-livre {
    text-align: center;
    border: black solid 1px;
    margin: 1rem;
}
p{
    width: 12rem;
    text-align: justify;
    margin: -8px;
    padding: 1rem
}
.btn-livre{
    text-align: center;
    margin: 1rem
}
</style>