<script>
import { mapState } from 'pinia'
import { useLivresStore,useUsersStore } from '@/stores'
import { LivreDetails } from '@/components'

export default {
    name: "LivreDetailsPage",
    components: {
        LivreDetails
    },
    data() {
        return {
            livreId: this.$route.params.id
        }
    },
    computed: {
        ...mapState(useLivresStore, ["getIsAuthenticated", "getIsAdmin"])
    }
}
</script>
<template>
    <section class="container row">
        <button
            @click="$router.go(-1)"
            class="btn btn-lg text-center btn-warning"
        >
            Retour à la Liste
        </button>
        <section class="col-12">
            <livre-details
                :livreId="livreId"
            />
        </section>
    </section>
</template>