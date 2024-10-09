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

<div class=topLineContainer>
    <div class = "topLine">
        <div class="item1"><p>WE ARE <span style="color: {color};">{StoreOpen}</span> <span class="disappear" style="color: white; font-weight: 200; font-style: normal;">Mon-Fri 8am - 5pm</span></p></div>
        <div class="item2"><p><span class="furtherDisappear">Call Us: <span style="color: white; font-weight: 200; font-style: normal;">+1 (713) 896-4105</span></span></p></div>
        <div class="item3"><p><span class="furtherDisappear">Visit Us <span style="color: #FFFFFF;"><span style="color: white; font-weight: 200; font-style: normal;">13150 FM 529 <span class="disappear">#127, Houston, TX</span></span></span></span></p></div>
    </div>    
</div>

<style>
    @media screen and (max-width: 1000px) {
        .disappear{
            display: none;
        }
    }

    @media screen and (max-width: 600px) {
        .furtherDisappear{
            display: none;
        }
        .item1{
            justify-content: center;
            align-items: center;
            position: absolute;
        }
    }

    .topLine {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        text-wrap: nowrap;
        max-width: 1000px;
    }

    .topLineContainer{
        background-color: #4169E1;
        display: flex;
        justify-content: center;
        align-items: center;
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