<div class="container" id="teamAnchorTag">
    <p class="title1">You're in <span style="text-decoration: line-through">good</span> <span style="color: #87CEEB">great</span> company.</p>
    <p class="subtitle">Our team of specialized engineers is committed to delivering exceptional service and expertise, ensuring your vehicle receives the best care possible.</p>
    <div class="pictures">
        <div class="imageText">
            <div class="img-container"><img></div>
            <p>Russell Fuller</p>
        </div>
        <div class="imageText">
            <div class="img-container"><img></div>
            <p>Jacob Herrera</p>
        </div>
    </div>
</div>

<style>
    @media screen and (max-width: 800px) {
        .pictures{
            width: 100% !important;
        }
    }

    .container{
        width: 100%;
        background-color: #EFF0F6;
        color: #363636;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-block: 80px;
    }

    .pictures {
        display: flex;
        width: 80%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding-top: 70px;
        max-width: 1000px;
    }

    .imageText{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .img-container {
        height: 250px;
        width: 200px;
        background-color: white;
    }

    img{
        object-fit: cover;
    }

    .pictures {
        gap: 50px;
    }

    .title1 {
        font-size: 36px;
        font-weight: 200;
        margin: 0 0 20px 0;
        text-align: center;
    }
    
    .subtitle {
        margin: 0;
        font-weight: 200;
        opacity: 0.8;
        text-align: center;
        padding-inline: 40px;
    }

</style>