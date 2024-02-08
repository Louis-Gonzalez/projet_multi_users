<script>
import { mapState, mapActions } from "pinia";
import { useLivresStore,useUsersStore } from "../../stores";

export default {
  name: "LivreDetails",
  props: {
    livreId: {
      type: [Number, String],
      default: null,
    },
  },
  methods: {
    affImg() {
      console.log(this.getCurrentLivre)
      const imgUrl = new URL("../../assets/img_livres/" + this.getCurrentLivre.img, import.meta.url).href
      return imgUrl
    }
  },
  // Récupérer le paramètre de route qui contient l'id de notre produit
  // Récupérer le produit correspondant à l'id dans le paramètre de route
  // en utilisant le store product
  computed: {
    ...mapState(useLivresStore, ["getLivreById","getLivres"]),
    ...mapState(useUsersStore, ['getCurrentUser']),
    getCurrentLivre() {
      console.log(this.getLivreById(this.livreId));
      return this.getLivreById(this.livreId);
    },
  }
};
</script>


<template>
  <section v-if="getCurrentLivre != null" class="container py-5">
    <article class="row">
      <section class="col-lg-6">
        <img
          :src = affImg()
          class="img-fluid"
          alt="Product Image"
          style="height: 500px"
        />
      </section>
      <section class="col-lg-6">
        <h2 class="fw-bold">{{ getCurrentLivre.titre }}</h2>
        <p class="text-muted">{{ getCurrentLivre.categorie }}</p>
        <p class="mb-4">{{ getCurrentLivre.short_descript }}</p>
        <div class="d-flex gap-3 mb-4">
          <button v-if="getCurrentUser == null" class="btn btn-outline-primary me-2" @:click="$router.push('/login')">Connexion</button>
          <button v-else-if="getCurrentLivre.etat!='moyennement abimé' && getCurrentLivre.etat!='abimé'" class="btn btn-primary" type="button">Reservation</button>
          <button v-else class="btn btn-primary disabled" type="button">Indisponible à la location</button>
        </div>
      </section>
    </article>
    <aside>
      <ul class="nav nav-tabs mt-5" id="productTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="description-tab"
            data-bs-toggle="tab"
            data-bs-target="#description"
            type="button"
            role="tab"
            aria-controls="description"
            aria-selected="true"
          >
            Description
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="specs-tab"
            data-bs-toggle="tab"
            data-bs-target="#specs"
            type="button"
            role="tab"
            aria-controls="specs"
            aria-selected="false"
          >
            Specifications
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="reviews-tab"
            data-bs-toggle="tab"
            data-bs-target="#reviews"
            type="button"
            role="tab"
            aria-controls="reviews"
            aria-selected="false"
          >
            Reviews
          </button>
        </li>
      </ul>
      <div class="tab-content" id="productTabContent">
        <div
          class="tab-pane fade show active"
          id="description"
          role="tabpanel"
          aria-labelledby="description-tab"
        >
          <p class="mt-3">
            {{ getCurrentLivre.description }}
          </p>
        </div>
        <div
          class="tab-pane fade"
          id="specs"
          role="tabpanel"
          aria-labelledby="specs-tab"
        >
          <table class="table mt-3">
            <tr>
              <th>Weight</th>
              <td>1kg</td>
            </tr>
            <tr>
              <th>Dimensions</th>
              <td>10 x 20 x 5 cm</td>
            </tr>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="reviews"
          role="tabpanel"
          aria-labelledby="reviews-tab"
        >
          <div class="mt-3">
            <h5>John Doe</h5>
            <p>I loved this product! It really changed the way I work.</p>
            <h5>Jane Smith</h5>
            <p>Great quality and excellent after-sales service.</p>
          </div>
        </div>
      </div>
    </aside>
  </section>
  <h2 v-else>Ce produit n'existe pas</h2>
</template>
