<script>
import { mapState, mapActions } from 'pinia'
import { useUsersStore } from '../../stores'

export default {
    name: "FormRegister",
    data () {
        return{
            nom : "",
            prenom : "",
            username : "",
            mail : "",
            password : "",
            adresse : "",
            numero : "",
            ville : "",
            CP : "",
        }
    },
    methods: {
        submitForm() {
            console.log(this.nom)
            const user = {
                nom : this.nom,
                prenom : this.prenom,
                username : this.username,
                mail : this.mail,
                password : this.password,
                adresse : this.adresse,
                numero : this.numero,
                ville : this.ville,
                CP : this.CP,
                avatar : this.avatar,
                id: Math.floor(Math.random() * Date.now()),
                historique: [],
                admin : false,
                status : true
            }
            this.addUser(user)
            console.log(this.getUsers)
        },
        ...mapActions(useUsersStore, ['addUser'])
    },
    computed: {
        ...mapState(useUsersStore, ['getUsers'])
    }
}
</script>

<template>
    <h1>inscription</h1>
    <div class="formulaire">
        <form @submit.prevent="submitForm">
            <div class="formulaire"></div>
            <div>
                <label for="nom">Nom </label>
                <input class="champs" type="text" name="nom" v-model="nom" required/>
            </div>

            <div>
                <label for="prenom">Prénom </label>
                <input class="champs" type="text" name="prenom" v-model="prenom" required/>
            </div>

            <div>
                <label for="username">Pseudo </label>
                <input class="champs" type="text" name="username" v-model="username" required/>
            </div>

            <div>
                <label for="mail">Mail </label>
                <input class="champs" type="mail" name="mail" v-model="mail" required/>
            </div>

            <div>
                <label for="password">Password </label>
                <input class="champs" type="password" name="password" v-model="password" required/>
            </div>

            <div>
                <label for="adresse">Adresse </label>
                <input class="champs" type="text" name="adresse" v-model="adresse" required/>
            </div>

            <div>
                <label for="numero">Numéro de téléphone </label>
                <input class="champs" type="number" name="numero" v-model="numero" required/>
            </div>

            <div>
                <label for="ville">Ville </label>
                <input class="champs" type="text" name="ville" v-model="ville" required/>
            </div>

            <div>
                <label for="CP">Code Postal :    </label>
                <input class="champs" type="number" name="CP" v-model="CP" required/>
            </div>

            <div>
                <label for="Avatar">Avatar</label>
                <input class="champs" type="file" accept=".jpeg, .png, .jpg, .gif" name="avatar" required/>
            </div>

            <button class="bouton" type="submit">S'inscrire </button>
            
        </form>
    </div>
</template>

<style scoped>
</style>