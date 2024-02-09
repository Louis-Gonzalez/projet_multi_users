<script>
import { useUsersStore } from '../../stores';
import {mapState, mapActions} from 'pinia';
import AdminEditUser from './AdminEditUser.vue';

export default {
    name: "AdminTabUsers",
    component: {
        AdminEditUser,
    },
    computed: {

        ...mapState(useUsersStore, ['getUsers'])
    },  
    methods: {
        getTabUsers() {
            
            const tabUsers = this.getUsers; // réutilisation de getUsers
            console.log(this.getUsers)
            
            return tabUsers
        },
        affImg(user) {
            const imgUrl = user.avatar
            return imgUrl
        },
        
        editUser(user){
            this.setUserToEdit(user)
            this.$router.push({name:'AdminEditUser'})
        },
        ...mapActions(useUsersStore, ['deleteUser','updateLocaleStorage','setUserToEdit']), // recupère le tableau des users depuis le store
    },
}
</script>

<template>
    <div>
        <div  class="titre-tab">
            <h2>Tableau des utilisateurs</h2>
        </div>    
        <div class="tab">
            <table>
                <thead>
                    <tr>
                        <th class="titre-col">Id</th>
                        <th class="titre-col">Name</th>
                        <th class="titre-col">Lastname</th>
                        <th class="titre-col">Username</th>
                        <th class="titre-col">Avatar</th>
                        <th class="titre-col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in getTabUsers()"
                        >
                        <td>{{item.id}}</td>
                        <td>{{item.prenom}}</td>
                        <td>{{item.nom}}</td>
                        <td>{{item.username}}</td>
                        <td>
                            <img :src=affImg(item) alt="img avatar profil" width="auto" height="auto"></td>
                        <td>
                            <button class="btn-bleu" @click="editUser(item)">Editer</button>
                            <button class="btn-rouge" @click="deleteUser(item)">Supprimer</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
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
.btn-bleu{
    background-color: blue;
    font-weight: bold;
    color:whitesmoke;
    border-radius: 5px;
}
.tab{
    width: 100%;
    border: black solid 1px;
}
.titre-col{
    font-weight: bold;
}
.titre-tab{
    background-color: cornflowerblue;
    color: black;
    border: black solid 1px;
}
th,
td{
    text-align: center;
    width: 15%;
    padding: 1rem;
}
h2{
    text-align: center;
}

</style>