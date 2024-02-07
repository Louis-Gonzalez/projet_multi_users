<script>
    export default {
        name: "LivreListeCard",
        props: {
            livre: {
                type: Object,
                default: null,
            },
        },
    }
</script>
<template>
<article 
    v-if="livre != null"
    class="card" 
    style="width: 18rem;"
  >
    <section class="card-body">
      <h3 class="card-title">{{ livre.nom }}</h3>
      <p class="text-muted">{{ livre.genre }}</p>
      <p class="card-text">{{ livre.short_descript }}</p>

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




  