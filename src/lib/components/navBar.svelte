<script>
	import Hamburger from 'svelte-hamburger';

    let open = false;

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

<div class="box" id="boxID">
    <div class="linkListBox" style="overflow: hidden;">
        <div>
            <li><a href="/" class="logo"><img src={"images/icons/SVG/logo.svg"} alt="logo-img"></a></li>
            <li><a href="/prices" on:click={dragBox} on:click={() => open = !open}>Services and pricing</a></li>
            <hr>
            <li><a href="/#locationAnchorPoint" on:click={dragBox} on:click={() => open = !open}>Location</a></li>
            <hr>
            <li><a href="/contact" on:click={dragBox} on:click={() => open = !open}>Contact us</a></li>
        </div>
    </div>
</div>
<div class="navBar" id="navigationBar">
    <div class="containerBox">
        <a href="/"><img class="logo" src={"images/icons/SVG/logo.svg"} alt="logo-img"></a>
        <div class="linkList">
            <li><a href="/prices">Services and Pricing</a></li>
            <li><a href="/#locationAnchorPoint">Location</a></li>
            <li><a href="/contact">Contact us</a></li>
        </div>
    </div>
    <a href={void(0)} on:click={dragBox} class="boorger"><Hamburger {open} on:click={() => open = !open} /></a>
</div>

<style>
    @media screen and (max-width: 800px) {
        .linkList {
            display: none !important;
        }
        .navBar{
            position: fixed !important;
            top: 0 !important;
        }
        .containerBox {
            padding-inline: 0 !important;
        }
    }

    @media screen and (min-width: 800px) {
        .boorger{
            display: none;
        }
    }

    .containerBox{
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        max-width: 1300px;
    }

    hr{
        width: 60%;
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
        z-index: 3;
    }

    .linkListBox li{
        padding-inline: 20px;
        padding-block: 10px;
        font-size: clamp(0px, 5vw, 30px);
        text-align: center;
    }

    .linkListBox {
        margin-top: 30px;
    }

    .logo{
        height: 60px;
        width: 60px;
        margin-left: 10px;
    }

    .boorger:hover{
        cursor: pointer;
    }

    .navBar{
        display: flex;
        top:0;
        position: fixed;
        width: 100%;
        height: 60px;
        background-color: #4169E1;
        align-items: center;
        justify-content: center;
        gap: 40px;
        z-index: 2;
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
        font-size: 16px;
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

    img{
        width: 100%;
        height: 100%;
        padding: 5px;
        border-radius: 5px;
        transition: 0.2s;
    }

</style>