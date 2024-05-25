<script>
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';

    onMount(() => {

        const nav = document.getElementById("navigationBar");
        var rect = nav.getBoundingClientRect();

        if (browser) {
            function update() {
                const elem = document.getElementById("navigationBar");
                const rect = elem.getBoundingClientRect();

                if (rect.top > 0){

                } else {
                    
                }

            }

            document.addEventListener("scroll", update);
            update();
        };
    })

</script>

<div class="navBar" id="navigationBar">
    <a href="/"><img class="logo" src="#" alt="logo-img"></a>
    <div class="linkList">
        <li><a href="/#servicesAnchorTag">Services</a></li>
        <li><a href="/#locationAnchorPoint">Location</a></li>
        <li><a href="/prices">Pricing</a></li>
        <li><a href="/contact">Contact us</a></li>
    </div>
    <div class="socials">
        <a href="https://www.instagram.com" target="_blank"><img src="src/lib/images/icons/instagram.svg" alt="instagram"></a>
        <a href="https://www.facebook.com/" target="_blank"><img src="src/lib/images/icons/facebook.svg" alt="facebook"></a>
        <a href="https://x.com" target="_blank"><img src="src/lib/images/icons/twitter.svg" alt="twitter"></a>
    </div>
</div>

<style>
    .navBar{
        display: flex;
        position: absolute;
        width: 100%;
        height: 50px;
        background-color: #4169E1;
        align-items: center;
        gap: 40px;
        z-index: 1;
    }

    .navBar>*:last-child{
        position: absolute;
        right: 0;
        margin-right: 30px;
    }

    .linkList{
        display: flex;
        gap: 30px;
    }

    .linkList a{
        font-size: 14px;
        font-weight: 200;
    }

    .linkList a:after {    
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 0.5px;
        left: 50%;
        background: #fff;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }

    .linkList a:hover:after { 
        width: 100%; 
        left: 0; 
    }

    .linkList li{
        list-style: none;
    }

    .logo{
        margin-left: 30px;
    }

</style>