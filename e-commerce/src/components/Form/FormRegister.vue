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
            cp : "",
        }
    },
    methods: {
        submitForm() {
            console.log(this.nom)
            const user = {
                nom : this.nom,
                prenom : this.prenom,
                username : this.username,
                email : this.mail,
                password : this.password,
                adresse : this.adresse,
                tel : this.numero,
                ville : this.ville,
                cp : this.cp,
                avatar : this.avatar,
                id: Math.floor(Math.random() * Date.now()),
                historique: [],
                admin : false,
                status : true
            }
            this.addUser(user)
            console.log(this.getUsers)
            console.log(this.cp)
            this.$router.push('/HomePage')
        },
        ...mapActions(useUsersStore, ['addUser'])
    },
    computed: {
        ...mapState(useUsersStore, ['getUsers'])
    }
}
</script>

<template>
    <div class="form-inscription">
        <div class="titre-inscription">
            <h1>Inscription</h1>
        </div>
    
        <div class="formulaire">
            <form @submit.prevent="submitForm">
                <div class="formulaire"></div>
                <div>
                    <label for="nom">Nom :</label>
                    <input class="champs" type="text" name="nom" v-model="nom" required/>
                </div>

                <div>
                    <label for="prenom">Prénom :</label>
                    <input class="champs" type="text" name="prenom" v-model="prenom" required/>
                </div>

                <div>
                    <label for="username">Pseudo :</label>
                    <input class="champs" type="text" name="username" v-model="username" required/>
                </div>

                <div>
                    <label for="mail">Mail :</label>
                    <input class="champs" type="mail" name="mail" v-model="mail" required/>
                </div>

                <div>
                    <label for="password">Password :</label>
                    <input class="champs" type="password" name="password" v-model="password" required/>
                </div>

                <div>
                    <label for="adresse">Adresse :</label>
                    <input class="champs" type="text" name="adresse" v-model="adresse" required/>
                </div>

                <div>
                    <label for="ville">Ville :</label>
                    <input class="champs" type="text" name="ville" v-model="ville" required/>
                </div>

                <div>
                    <label for="cp">Code Postal : </label>
                    <input class="champs" type="text" name="cp" v-model="cp" required/>
                </div>

                <div>
                    <label for="numero">Numéro de téléphone :</label>
                    <input class="champs" type="text" name="numero" v-model="numero" required/>
                </div>

                <div>
                    <label for="Avatar">Avatar</label>
                    <input class="champs" type="file" accept=".jpeg, .png, .jpg, .gif" name="avatar" required/>
                </div>

                <button class="btn-vert" type="submit">S'inscrire </button>
                
            </form>
        </div>
    </div>
</template>

<style scoped>
.form-inscription{
    border: black solid 1px;
}
.titre-inscription{
    border: black solid 1px;
    background-color: cornflowerblue;
}
    div {
        margin: 2rem;
        text-align: center;
    }
.partie-haute-profil{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: black solid 1px
}
.partie-quatre{
    border: black solid 1px;
    text-align: center
}
.btn-vert{
    background-color: green;
    font-weight: bold;
    color:whitesmoke;
    border-radius: 5px;
}
.btn-rouge{
    background-color: red;
    font-weight: bold;
    color:whitesmoke;
    border-radius: 5px;
}
.droits{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    border: black solid 1px
}
input,
select {
    margin :1rem;
}
</style>