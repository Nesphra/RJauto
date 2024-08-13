<script>
    var currentdate = new Date(); 
    var hours = currentdate.getHours()
    var day = currentdate.getDay()
    let color

    var StoreOpen
    if (8 <= hours && hours < 17 && day <= 5) {
        StoreOpen = "OPEN"
        color = "#89FF8E"
    } else {
        StoreOpen = "CLOSED"
        color = "#FF8989"
    }
    
</script>

<div>
    <div class = "topLine">
        <div class="item1"><p>WE ARE <span style="color: {color};">{StoreOpen}</span> <span class="disappear" style="color: white; font-weight: 200; font-style: normal;">Mon-Fri 8am - 5pm</span></p></div>
        <div class="item2"><p><span class="furtherDisappear">Call Us: <span style="color: white; font-weight: 200; font-style: normal;">+1 (713) 896-4105</span></span></p></div>
        <div class="item3"><p><span class="furtherDisappear">Visit Us <span style="color: #FFFFFF;"><span style="color: white; font-weight: 200; font-style: normal;">13150 FM 529 <span class="disappear">#127, Houston, TX</span></span></span></span></p></div>
        <div class="socials">
            <a href="https://www.instagram.com" target="_blank"><img src={"/images/icons/instagram.svg"} alt="instagram"></a>
            <a href="https://www.facebook.com/" target="_blank"><img src={"/images/icons/facebook.svg"} alt="facebook"></a>
            <a href="https://x.com" target="_blank"><img src={"/images/icons/twitter.svg"} alt="twitter"></a>
        </div>
    </div>    
</div>

<style>
    @media screen and (max-width: 1220px) {
        .disappear{
            display: none;
        }
    }

    @media screen and (max-width: 800px) {
        .furtherDisappear{
            display: none;
        }
    }

    .topLine {
        width: 100%;
        height: 30px;
        background-color: #4169E1;
        display: flex;
        align-items: center;
        text-wrap: nowrap;
    }

    .topLine>*{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .item1 p{
        font-style: italic;
        font-weight: 500;
        color: #242424;
    }
    .item2 p{
        font-style: italic;
        font-weight: 500;
        color: #242424;
    }
    .item3 p{
        font-style: italic;
        font-weight: 500;
        color: #242424;
        min-width: 100%;
        text-align: center;
    }

    .socials{
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>