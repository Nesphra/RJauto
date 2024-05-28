<div class="container">
    <div class="img-container"><img class="image" src={"/images/serviceImages/top-view-woman-repairing-car_23-2150171260.jpg"} alt="handsome mechanic"></div>
    <div class="text">
        <p class="title">Every repair <span style="color:#87CEEB">matters</span> to us.</p>
        <p class="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, officia, minima expedita ea fuga laudantium ducimus impedit excepturi sunt quas placeat voluptate magnam temporibus eaque ullam iste, doloribus et. Tempora?</p>
        <a href="/contact">Contact us</a>
    </div>
</div>

<style>

    @media screen and (max-width: 950px) {
        .container{
            flex-direction: column;
            padding-inline: 10px !important;
        }
        .text{
            text-align: center;
            width: 100% !important;
            align-items: center;
        }
        .img-container{
            display: none;
            margin-bottom: 50px;
        }
    }

    .container{
        background-color: #363636;
        padding: 30px;
        display: flex;
        padding-inline: 100px;
        justify-content: space-around;
        align-items: center;
        column-gap: 80px;
    }

    .img-container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image{
        max-width: 500px;
        width: 100%;
        height: 100%;
        border-radius: 30px;
        object-fit: cover;
    }

    .text{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #EFF0F6;
    }

    .text>*:first-child{
        font-size: 28px;
        margin: 0;
    }

    .text>*:nth-child(2){
        font-size: 18px;
        font-weight: 200;
    }

    .text>*:last-child{
        padding: 15px;
        width:min-content;
        white-space: nowrap;
        border-radius: 6px;
        background-color: #18A0FB;
        color: #EFF0F6;

        margin-top: 20px;
        transition: 0.2s;
    }

    .text>*:last-child:hover{
        color: #363636;
        background-color: #EFF0F6;
    }

</style>