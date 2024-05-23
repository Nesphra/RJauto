<script>

</script>

<div class="navBar">
    <a href="/"><img class="logo" src="#" alt="logo-img"></a>
    <div class="linkList">
        <li><a href="/services">Services</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="/prices">Pricing</a></li>
        <li><a href="/contact">Contact us</a></li>
    </div>
    <div class="socials">
        <a href="https://www.instagram.com" target="_blank"><img src="#" alt="in"></a>
        <a href="https://www.facebook.com/" target="_blank"><img src="#" alt="f"></a>
        <a href="https://x.com" target="_blank"><img src="#" alt="X"></a>
    </div>
</div>

<style>
    .navBar{
        position: absolute;
        width: 100%;
        height: 50px;
        background-color: #4169E1;
        display: flex;
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
        gap: 10px;
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