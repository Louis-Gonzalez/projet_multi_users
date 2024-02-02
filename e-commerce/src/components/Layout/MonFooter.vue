<script>
export default {
    name: "MonFooter",
}
</script>

<template>
    <div class="footer">
        <div class="contact">
            <p>
            New York Public Library
            476 5th Ave, New York, NY 10018, États-Unis
            </p>
            <p>
            +19-172-756-975
            laberyofny@gmail.com
            </p>
        </div>
        <div class="reseauSociaux">
            <p>
                <!--icon fb, teewter, insta, youtube, pinterest-->
                <img src="../../assets/img/logo_FB.png" alt="logo de fb" width="50rem" height="auto">
                <img src="../../assets/img/logo_tewter.png" alt="logo de twitter" width="50rem" height="auto">
                <img src="../../assets/img/logo_insta.jpg" alt="logo de insta" width="50rem" height="auto">
                <img src="../../assets/img/logo_yt.png" alt="logo de youtube" width="50rem" height="auto">
                <img src="../../assets/img/logo_pinterest.png" alt="logo de pinterest" width="50rem" height="auto">
            </p>
            <p>
                S'inscrire à la newsletter
                New-York public library
                Politique de confidentialité
                Conditions générales de vente
                Nous contacter
                Foire aux questions
                Rubrique Handicap et accessibilité
                Accessibilité du site (non conforme)
                Mentions légales
                A propos
            </p>
        </div>
        <div class="logo_ny">
            <p>
                <img src="../../assets/img/logo_ny.jpg" alt="logo de fb" width="150rem" height="auto">
            </p>
        </div>
    </div>
</template>

<style>
.footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: black;
    color: bisque;
    text-align: center;
}
.footer > *{
    width: 33%;
    margin-top: 5rem;
}
</style>