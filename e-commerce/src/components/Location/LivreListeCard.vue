<script>
    export default {
      name: "LivreListeCard",
      props: {
          livre: {
              type: Object,
              default: null,
          },
      },
      methods: {
        affImg() {
          console.log(this.livre)
          const imgUrl = new URL("../../assets/img_livres/" + this.livre.img, import.meta.url).href
          return imgUrl
        }
      }
    }
</script>
<template>
<article 
    v-if="livre != null"
    class="card" 
    style="width: 18rem;"
  >
    <section class="card-body">
      <div class="img-livre">
        <img :src=affImg(item) alt="toto" class="img-fluid">
      </div>
      <h3 class="card-title">{{ livre.nom }}</h3>
      <p class="text-muted">{{ livre.genre }}</p>
      <p class="card-text">{{ livre.short_descript }}</p>
      <router-link
      :to="{name: 'LivreDetailsPage', params: {id: livre.id}}"
      class="btn btn-info"
      >
          Voir le livre
      </router-link>
    </section>
  </article>
  <section
    v-else
    class="card" 
    style="width: 18rem;"
  >
    <img src="..." class="card-img-top" alt="...">
    <h3 >Ce produit n'existe pas</h3>
  </section>
</template>




  