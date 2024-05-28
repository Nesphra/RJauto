<script>
    import LeafletMap from '$lib/LeafletMap.svelte'
</script>

<div class="container" id="locationAnchorPoint">
    <div class="containerBody">
        <div class="text">
            <p class="title">We're right here.</p>
            <p class="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, officia, minima expedita ea fuga laudantium ducimus impedit excepturi sunt quas placeat voluptate magnam temporibus eaque ullam iste, doloribus et. Tempora?</p>
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

    .text>*:last-child{
        font-size: 18px;
        font-weight: 200;
    }

</style>