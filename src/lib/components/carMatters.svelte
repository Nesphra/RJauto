<div class="container">
    <div class="text">
        <p class="title">Fleet <span style="color:#87CEEB">Benefits</span></p>
        <div class="body">
            <div class="body-left">
                <li>Pickup and delivery services available</li>
                <li>Appointments</li>
                <li>Priority Service</li>
                <li>Competitive pricing</li>
                <li>Discounted labor rates</li>
                <li>Skilled Technicians and state of the art equipment</li>
            </div>
            <div class="body-right">
                <li>12 month/12,000 mile warranty minimum</li>
                <li>Lifetime warranty on some parts</li>
                <li>Extended warranties accepted</li>
                <li>Completely digitized repair records for easy access</li>
                <li>All fleet management services accepted</li>
                <li>Work with fleet management providers</li>
            </div>
        </div>
        <a href="/contact">Contact us</a>
    </div>
</div>

<style>

    @media screen and (max-width: 950px) {
        .body{
            flex-direction: column !important;
        }
    }

    @media screen and (max-width: 600px) {
        .text{
            list-style: none;
            padding-block: 10px !important;
            border-radius: 0 !important;
        }

        .body-left, .body-right{
            text-align: center !important;
        }

        .container{
            padding: 0 !important;
        }
    }

    li{
        margin-block: 8px;
    }

    .container{
        background-image: url("/images/place/place1.png");
        background-size: cover;
        height: fit-content;
        padding-block: 50px;
        padding-inline: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .text{
        color: #EFF0F6;
        background-color: rgba(0, 0, 0, 0.386);
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        -webkit-backdrop-filter: blur(15px); 
        backdrop-filter: blur(15px);
        padding: 50px;
        border-radius: 15px;
    }

    .title{
        font-size: 28px;
        margin: 0;
        margin-bottom: 30px;
        
    }

    .body-right, .body-left{
        font-size: clamp(10px, 4vw, 18px);
        display: flex;
        flex-direction: column;
        font-weight: 300;
        text-align: left;
        width: 100%;
        line-height: 25px;
    }

    .body{
        display: flex;
        justify-content: space-around;
        column-gap: 30px;
        flex-direction: row;
    }

    .text>*:last-child{
        padding: 15px;
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