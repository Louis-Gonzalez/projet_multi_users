<script>
//import {AdminEditUser, AdminCreateLivre, AdminEditLivre} from "@/components"
    export default {
        name: "HomeAdminPage",
    }
</script>

<template>
     <h1 class="titre">Admin Home Page</h1>
            <div class="cards">
                <div @click="this.$router.push({name: 'AdminTabUsers'})" class="modif-user">
                    <div>
                        <h3 class="change">Modification d'un utilisateur</h3>
                    </div>
                </div>
                <div @click="this.$router.push({name: 'AdminCreateLivre'})" class="create-book">
                    <div>
                        <h3 class="change">Création d'un livre</h3>
                    </div>
                </div>
                <div @click="this.$router.push({name: 'AdminEditLivre'})" class="modif-book">
                    <div>
                        <h3 class="change">Modification d'un livre</h3>
                    </div>
                </div>
         </div>
</template>

<style scoped>
    .titre {
        font-size: 2.5rem;
        padding-top: 4%;
        text-align: center;
    }
    .cards {
        margin-top: 5rem;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    .modif-user {
        font-family: sans-serif;
        background-color: rgb(178, 196, 211);
        box-shadow: 12px 10px 11px 2px rgba(0,0,0,0.33);
        -webkit-box-shadow: 12px 10px 11px 2px rgba(0,0,0,0.33);
        -moz-box-shadow: 12px 10px 11px 2px rgba(0,0,0,0.33);
        border-radius: 20px;
        width: 30%;
        height: 30rem;
        text-align: center;
    }
    .create-book {
        font-family: sans-serif;
        background-color: rgb(178, 196, 211);
        box-shadow: 12px 10px 11px 2px rgba(0,0,0,0.33);
        -webkit-box-shadow: 12px 10px 11px 2px rgba(0,0,0,0.33);
        -moz-box-shadow: 12px 10px 11px 2px rgba(0,0,0,0.33);
        border-radius: 20px;
        width: 30%;
        height: 30rem;
        text-align: center;
    }
    .modif-book {
        font-family: sans-serif;
        background-color: rgb(178, 196, 211);
        box-shadow: 12px 10px 11px 2px rgba(0,0,0,0.33);
        -webkit-box-shadow: 12px 10px 11px 2px rgba(0,0,0,0.33);
        -moz-box-shadow: 12px 10px 11px 2px rgba(0,0,0,0.33);
        border-radius: 20px;
        width: 30%;
        height: 30rem;
        text-align: center;
    }

    .change {
        font-size: 1.7rem;
        font-weight: bold;
        padding-top: 211px;
    }

    .modif-user:hover {
        background-color: rgb(158, 180, 192);
    }

    .create-book:hover {
        background-color: rgb(158, 180, 192);
    }

    .modif-book:hover {
        background-color: rgb(158, 180, 192);
    }
</style>