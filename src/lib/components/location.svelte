<script>

</script>

<div class="container" id="locationAnchorPoint">
    <div class="text">
        <p class="title">We're right here.</p>
        <p class="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, officia, minima expedita ea fuga laudantium ducimus impedit excepturi sunt quas placeat voluptate magnam temporibus eaque ullam iste, doloribus et. Tempora?</p>
    </div>
    <div class="maps-container">
        <iframe
            width="100%"
            height="100%"
            style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=API_KEY
                &q=Space+Needle,Seattle+WA">
        </iframe>
    </div>
</div>

<style>
    .container{
        height: 100vh;
        display: flex;
        padding-inline: 100px;
        justify-content: space-around;
        align-items: center;
        column-gap: 80px;
    }

    .maps-container{
        width: 50%;
        height: 60%;
        background-color: black;
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