<script>
import {useUsersStore} from '../stores'
import { mapState, mapActions } from 'pinia'

export default {
    name: "LoginPage",
    data() {
        return {
            username: "", // c'est dans le return les actions avec v-model
            password: "",
        };
    },
    methods: {
        matchLogin() {
            console.log(this.getUsers);
            const user = this.getUsers.find(user => user.username === this.username);
            console.log(user);
            // il faut parcourir le tabelau de usersName et qu'il y a une corrspodance.
            // ceci renvoi un objet user.password
            if (this.password == user.password) {
                // aller sur home avec le profil connecté
                this.setCurrentUser(user);
                this.$router.go(-1);
            }
            else {
                this.setCurrentUser(null);
                this.username = null;
                this.password = null;
            }
            return "Vous etes connecté";
        },
        ...mapActions(useUsersStore, ['setCurrentUser'])
    },
    computed: {
        ...mapState(useUsersStore, ['getUsers'])
    }
}
</script>

<template>
    <div class="form-login">
        <div class="titre-login">
                <h2>LoginPage</h2>
        </div>
        <div class="form">
            <form @submit.prevent="matchLogin">
                <table>
                    <div class="div-input">
                                            <label for="userName" method="post"> Entrer votre UserName :</label>
                        <input class= "input" type="text" name="userName" v-model="username">
                    </div>
                    <div class="div-input">
                        <label for="password" method="post"> Entrer votre password :</label>
                        <input class= "input" type="password" name="password" v-model="password">
                    </div>
                    <div class="div-input">
                        <button type="submit" class="btn-submit">Login</button>
                        <router-link :to="'/register'"> <p>Cliquer ici pour vous inscrire !</p> </router-link>
                    </div>
                </table>
            </form>
        </div>
    </div>
</template>

<style scoped>
.form-login{
    justify-content: center;
    border: black solid 1px;
}
    .btn-submit{
        background-color: green;
        border-radius: 5px;
        font-weight: bold;
        margin: 1rem;
        padding: 0.5rem;
    }
    h1,
    .div-input{
        margin : 2rem;
        text-align: center;
    }
    label {
        font-weight: bold;
        margin: 2rem;
    }
    p{
        text-decoration: underline;
        color:blue;
    }
    .titre-login{
    background-color:  rgb(145, 199, 168);
    text-align: center;
    padding: 0.5rem;
    width: 100%;
    }
.form{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
