<script>
export default { 
    name: "HomePage" 
}
</script>

<template>
    <section>
        <h1>BIBLIO'TECH</h1>
            <p>Bienvenue à vous chères lectrices et lecteurs.<br>Vous arrivez ici sur le site de notre bibliothèque, la fameuse "BIBLIO'TECH",
            ou vous pourrez louer en ligne les livres qui vous feront envie.<br> Ici c'est très simple, si vous n'avez pas encore de compte il suffit tout 
            simplement de vous inscrire et le tour est joué 😉.<br> Si vous êtes déja abonnés, vous savez comment ça fonctionne. <br>
            A vos livres !!!
            </p>
            <p>Ou nous trouver</p>
            <div class="map">
                <img src="../assets/img/New_York_Public_Library.jpeg" height="auto" width="500" alt="Photo bibliothèque">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4018132785604!2d-73.9848283234515!3d40.75
                318633509233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590099a8a8a9%3A0x3b51df6e509a734c!2sNew%20York%20Pub
                lic%20Library!5e0!3m2!1sfr!2sfr!4v1706880419677!5m2!1sfr!2sfr" width="500" height="auto" style="border:0;" allowfullscreen="" 
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </section>
</template>

<style>
    h1 {
        text-align: center;
    }
    .map {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>