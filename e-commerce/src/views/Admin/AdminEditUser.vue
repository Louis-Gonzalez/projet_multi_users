<script>
import { useUsersStore } from '../../stores';
import { mapActions, mapState } from 'pinia'
export default {
    name:"AdminEditUser",
    data(){
        return {
            nom:"",
            prenom:"",
            adresse:"",
            tel:"",
            ville:"",
            cp:"",
            avatar:"",
            username:"",
            email:"",
            admin:"",
            status:"",
            zone:""
        }
    },
    methods: {
        ...mapActions(useUsersStore, ['updateuser','updateAvatar']),
        test(x) {
            this.avatar = x + ""
            const user = {
                id: this.getUserToEdit.id,
                nom: this.nom,
                prenom: this.prenom,
                adresse: this.adresse,
                tel: this.tel,
                ville: this.ville,
                cp: this.cp,
                avatar: this.avatar,
                username: this.username,
                email: this.email,
                password: this.getUserToEdit.password,
                admin: this.admin,
                status: this.status,
                historique: this.getUserToEdit.historique
                
            }
            console.log(this.avatar)
            this.updateuser(user)
            this.$router.go(-1)
        },
        encodeImageFileAsURL(element) {
            var file = element
            var reader = new FileReader();
            reader.onloadend = () => {
                reader.result
                imgElem.setAttribute('src', reader.result);
                this.test(reader.result)
            }
            reader.readAsDataURL(file);

        },
        handleFileUpload(){
            this.avatar = this.$refs.avatar.files[0];
            console.log(this.avatar.name)
        },
        
        affImg() {
            const imgUrl = this.getUserToEdit.avatar
            return imgUrl
        },
        submitForm() {
            let formData = new FormData();
            formData.append('file', this.avatar);
            this.encodeImageFileAsURL(this.avatar)
            
            
        },
        
    },
    computed:{
        ...mapState(useUsersStore, ['getUserToEdit']),     
    },
    mounted() {
            const user = this.getUserToEdit
            console.log(this.getUserToEdit)
            this.nom = user.nom
            this.prenom = user.prenom
            this.adresse = user.adresse
            this.tel = user.tel
            this.ville = user.ville
            this.cp = user.cp
            this.avatar = user.avatar
            this.username = user.username
            this.email = user.email
            this.avatar = user.avatar
            this.admin = user.admin
            this.status = user.status
            console.log(this.nom)
    }
}
</script>

<template>
    <div>
        <img id="imgElem">
        <div class="titre-profil">
            <h1>Profil</h1>
        </div>
        <div class="formulaire">
            <form @submit.prevent="EditForm">
                <div class="partie-haute-profil">
                    <div class="partie-un">
                        <h2>Informations Personnelles</h2>
                        <div>
                            <label for="nom">Nom :</label>
                            <input class="champs" type="text" name="nom" v-model="nom" required/>
                        </div>
                        <div>
                            <label for="prenom">Prénom :</label>
                            <input class="champs" type="text" name="prenom" v-model="prenom" required/>
                        </div>
                            <label for="adresse">Adresse :</label>
                            <input class="champs" type="text" name="adresse" v-model="adresse" required/>
                        <div>
                            <label for="tel">Numéro de téléphone :</label>
                            <input class="champs" type="text" name="tel" v-model="tel" required/>
                        </div>
                        <div>
                            <label for="ville">Ville :</label>
                            <input class="champs" type="text" name="ville" v-model="ville" required/>
                        </div>
                        <div>
                            <label for="cp">Code Postal : </label>
                            <input class="champs" type="text" name="cp" v-model="cp" required/>
                        </div>
                    </div>
                    <div class="partie-deux">
                        <img :src=affImg() alt="img avatar profil" width="auto" height="auto">
                    </div>
                </div>
                <div class="droits">
                    <div class="admin">
                        <h2>Attribuer les fonctionnalités personnalisées</h2>
                        <label for="admin">Modifier les droits:</label>
                        <select v-model="admin" required>
                            <h3>Ouvrir les droits Admin ou non :</h3>
                            <option value="false">Non Admin</option>
                            <option value="true">Admin</option>
                        </select>
                    </div>
                    <div class="status">
                        <label for="status">Modifier le status de location :</label>
                        <select v-model="status" required>
                            <h3>Ouvrir le status à la location des livres ou non </h3>
                            <option value="true">Location possible</option>
                            <option value="false">Pas de location</option>
                        </select>
                    </div>
                </div>
                <div class="partie-quatre">
                    <h2>Identifiants de Connexion</h2>
                    <div>
                        <label for="username">Pseudo :</label>
                        <input class="champs" type="text" name="username" v-model="username" required/>
                    </div>
                    <div>
                        <label for="email">Mail :</label>
                        <input class="champs" type="mail" name="email" v-model="email" required/>
                    </div>
                </div>
                <div>
                    <div>
                        <label for="Avatar">Avatar :</label>
                        <input class="champs" type="file" accept=".jpeg, .png, .jpg, .gif" name="avatar" ref="avatar" @change="handleFileUpload()" required/>
                    </div>
                    <button class="btn-vert" @click="submitForm()">Valider les modifications</button>
                </div>
            </form>
        </div>
    </div>    
</template>

<style scoped>
.titre-profil{
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