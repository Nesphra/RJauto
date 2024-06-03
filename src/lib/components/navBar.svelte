<script>
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
	import Hamburger from 'svelte-hamburger';

    let open = false;

    onMount(() => {

        const nav = document.getElementById("navigationBar");
        let initialOffsetTop;

        if (browser) {
            initialOffsetTop = nav.getBoundingClientRect().top + window.scrollY;

            window.addEventListener("scroll", function() {
                var scroll = window.scrollY;

                if (scroll <= initialOffsetTop) {
                    nav.style.position = "absolute";
                    nav.style.top = "auto";
                } else {
                    nav.style.position = "fixed";
                    nav.style.top = 0;
                }
            });
        }

    });

    function dragBox() {
        const box = document.getElementById("boxID");
        
        if (box.style.transform != "translate(0px)"){
            box.style.transform = "translate(0)"
        } else {
            box.style.transform = "translate(-101%)"
        }

        console.log(box.style.transform)
    };
</script>

<div class="navBar" id="navigationBar">
    <div class="box" id="boxID">
        <div class="linkListBox">
            <div class="socialsBox">
                <a href="https://www.instagram.com" target="_blank"><img src={"/images/icons/instagram.svg"} alt="instagram"></a>
                <a href="https://www.facebook.com/" target="_blank"><img src={"/images/icons/facebook.svg"} alt="facebook"></a>
                <a href="https://x.com" target="_blank"><img src={"/images/icons/twitter.svg"} alt="twitter"></a>
            </div>
            <div>
                <li><a href="/"><img class="logo" src="#" alt="logo-img"></a></li>
                <li><a href="/#servicesAnchorTag" on:click={dragBox} on:click={() => open = !open}>Services</a></li>
                <hr>
                <li><a href="/#locationAnchorPoint" on:click={dragBox} on:click={() => open = !open}>Location</a></li>
                <hr>
                <li><a href="/prices" on:click={dragBox} on:click={() => open = !open}>Pricing</a></li>
                <hr>
                <li><a href="/contact" on:click={dragBox} on:click={() => open = !open}>Contact us</a></li>
            </div>
        </div>
    </div>
    <a href="/"><img class="logo" src="#" alt="logo-img"></a>
    <div class="linkList">
        <li><a href="/#servicesAnchorTag">Services</a></li>
        <li><a href="/#locationAnchorPoint">Location</a></li>
        <li><a href="/prices">Pricing</a></li>
        <li><a href="/contact">Contact us</a></li>
    </div>
    <div class="socials">
        <a href="https://www.instagram.com" target="_blank"><img src={"/images/icons/instagram.svg"} alt="instagram"></a>
        <a href="https://www.facebook.com/" target="_blank"><img src={"/images/icons/facebook.svg"} alt="facebook"></a>
        <a href="https://x.com" target="_blank"><img src={"/images/icons/twitter.svg"} alt="twitter"></a>
    </div>
    <a href={void(0)} on:click={dragBox} class="boorger"><Hamburger {open} on:click={() => open = !open} /></a>
</div>

<style>
    @media screen and (max-width: 800px) {
        .linkList {
            display: none !important;
        }
        .socials{
            display: none !important;
        }
        .navBar{
            position: fixed !important;
            top: 0 !important;
        }
    }

    @media screen and (min-width: 800px) {
        .boorger{
            display: none;
        }
    }

    hr{
        width: 100%;
    }

    .box{
        width: clamp( 200px, 40vw, 350px);
        height: 100vh;
        position: fixed;
        top: 0;
        transform: translate(-101%);
        background-color: #5a5a5a;
        border-radius: 0 15px 15px 0;
        transition: 0.2s;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .linkListBox li{
        padding-inline: 20px;
        padding-block: 10px;
        font-size: clamp(0px, 4vw, 30px);
        text-align: center;
    }

    .linkListBox {
        margin-top: 30px;
    }

    .socialsBox{
        bottom: 0;
    }

    .boorger:hover{
        cursor: pointer;
    }

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

    .linkList li,
    .linkListBox li{
        list-style: none;
    }

    .logo{
        margin-left: 30px;
    }

    .socials,
    .socialsBox{
        display: flex;
        column-gap: 10px;
        align-items: center;
        justify-content: center;
        width: 100px;
        position: absolute;
        right: 30px;
    }

    img{
        width: 100%;
        height: 100%;
        padding: 5px;
        border-radius: 5px;
        transition: 0.2s;
    }

</style>