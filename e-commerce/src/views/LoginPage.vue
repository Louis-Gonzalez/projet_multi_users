<script>
import {useUsersStore} from '../stores'

export default {
    name: "LoginPage",
    data() {
        return {
            userName: "", // c'est dans le return les actions avec v-model
            password: "",
        }
    },
    method: {
        matchLogin(userName,password){
            // il faut parcourir le tabelau de usersName et qu'il y a une corrspodance.
            if (getUSers.find (user => user.userName === userName)){
                // ceci renvoi un objet user.password
                if (password == user.password){
                    // aller sur home avec le profil connecté
                    $router.push('/login')
                }
            }
            return "Vous etes connecté"
        }
    },
computed: {
    ...mapState(useUsersStore, ['getUsers'])

}


}
</script>

<template>
    <form>
        <table>
            <div class="super-div-input">
                <h2>LoginPage</h2>
                <div class="div-input">
                    <label for="userName" method="post"> Entrer votre UserName :</label>
                    <input class= "input" type="text" name="userName" v-model="userName">
                </div>
                <div class="div-input">
                    <label for="password" method="post"> Entrer votre password :</label>
                    <input class= "input" type="password" name="password" v-model="password">
                </div>
                <div class="div-input">
                    <button type="submit" @click.prevent="matchLogin" class="btn-submit">Login</button>
                    <p id="vous-inscrire" a href="lien à venir">
                        Cliquer ici pour vous inscrire !
                    </p>
                </div>
            </div>
        </table>
    </form>
</template>

<style scoped>
    .btn-submit{
        background-color: green;
        border-radius: 5px;
        font-weight: bold;
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
    .super-div-input{
background-color: rgb(202, 175, 139);
    }
</style>
