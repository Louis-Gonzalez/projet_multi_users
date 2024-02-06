<script>


export default {
  name: "LivreListe",
  props: {
    livre: {
      type: Object,
      default: null,
    },
  }
};
</script>

<template>
  <article 
    v-if="livre != null"
    class="card" 
    style="width: 18rem;"
  >
    <img src="..." class="card-img-top" alt="...">
    <section class="card-body">
      <h3 class="card-title">{{ livre.nom }}</h3>
      <p class="text-muted">{{ livre.genre }}</p>
      <p class="card-text">{{ livre.description }}</p>
      <router-link
        :to="{name: 'LivreDetailsPage', params: {id: livre.id}}"
        class="btn btn-primary"
      >
        Voir L'article
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
