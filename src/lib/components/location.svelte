<script>
    import LeafletMap from '/src/lib/leafletMap.svelte'
</script>

<div class="container" id="locationAnchorPoint">
    <div class="containerBody">
        <div class="text">
            <p class="title">We're right here.</p>
            <p class="body">We are located at <a href="https://www.google.com/maps/place/Tires+Express+%26+More/@29.88077,-95.6100165,244m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8640d0f371900001:0x2082a656ec816941!8m2!3d29.88077!4d-95.6087988!16s%2Fg%2F11ggm4g7s5?entry=ttu" target="_blank"><span style="color: #4169E1; font-weight: 300; text-decoration: underline;">13150 FM 529 #127, Houston, TX</span></a>. We are easily accessible and ready to service. We'd love to chat with you about your car!</p>
            <p class="body">Business hours: <span style="font-weight: 400;">Monday-Friday 8am-5pm</span>, closed on week-ends and holidays</p>
        </div>
        
        <div class="maps-container" id="map">
            <LeafletMap></LeafletMap>
        </div>
    </div>
</div>

<style>
    @media screen and (max-width: 950px) {
        .containerBody{
            flex-direction: column;
            padding-inline: 10px !important;
        }
        .maps-container{
            width: 100% !important;
        }
        .text{
            width: 100% !important;
            align-items: center;
            text-align: center;
        }
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .containerBody{
        height: clamp(700px, 100vh, 1200px);
        width: clamp(200px, 80%, 1500px);
        display: flex;
        justify-content: space-around;
        align-items: center;
        column-gap: 80px;
    }

    .maps-container{
        width: 50%;
        background-color: black;
        border-radius: 15px;
        z-index: 0;
    }

    .text{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .text>*:first-child{
        font-size: 28px;
        margin: 0;
    }

    .body{
        font-size: 18px;
        font-weight: 200;
    }

</style>