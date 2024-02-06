<script>
import { mapState } from 'pinia'
import {LivreDetails} from '@/components'

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
            v-if="getIsAuthenticated && getIsAdmin" 
            class="btn btn-lg btn-warning text-center"
            @click="$router.push({name: 'ProductAdmin'})"
        >
            Retour à l'administration
        </button>
        <router-link
            to="/products"
            class="btn btn-lg text-center"
        >
            Retour à la Liste
        </router-link>
        <section class="col-12">
            <h2 class="text-center">Product Detail Page</h2>
            <livre-details
                :livreId="livreId"
            />
        </section>
    </section>
</template>