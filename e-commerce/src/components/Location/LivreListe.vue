<script>
import { mapState} from 'pinia';
import { useLivresStore } from '@/stores';
import { LivreListeCard } from '@/components';

export default {
  name: "LivreListe",
  components: {
    LivreListeCard
  },
  computed: {
    ...mapState(useLivresStore, ["getLivres"]),
  }
};
</script>

<template>
  <section class="container row">
        <livre-liste-card
            v-for="livre in getLivres"
            :key="livre.id"
            :livre="livre"
            class="col-4"
        />
    </section>
</template>
