<script>
import { mapState} from 'pinia';
import { useLivresStore } from '@/stores';
import { LivreListeCard } from '@/components';

export default {
  name: "LivreListe",
  components: {
    LivreListeCard
  },
  data() {
    return {
      categorie : this.$route.params.categorie,
      search : ''
    }
  },
  methods: {
    test() {
      console.log(this.categorie)
    }
  },
  computed: {
    ...mapState(useLivresStore, ["getLivres"]),
    livresByCategorie() {
      if(this.categorie == "Tout"){
        return this.getLivres
      }
      return this.getLivres.filter((livre) => livre.categorie == this.categorie);
    },
    filteredProducts() {
      return this.livresByCategorie.filter(el => {
        // return true if the product should be visible

        // in this example we just check if the search string
        // is a substring of the product name (case insensitive)
        return el.titre.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
      });
    }
  }
};
</script>

<template>
  <section class="container row">
    <div class="button_search">
      <button
        @click="$router.push('/location')"
        class="btn btn-lg text-center btn-warning"
      >
        Retour l'accueil
      </button>
      <div class="search-wrapper panel-heading col-sm-12">
        <input class="search" type="text" v-model="search" placeholder="Search by title" /> <br> <br>
      </div>  
    </div>
    <livre-liste-card
      v-for="livre in filteredProducts"
        :key="livre.id"
        :livre="livre"
        class="col-4"
    />
  </section>
</template>

<style scoped>
.button_search {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.search {
  justify-content: center;
}


</style>