<div class="body" id="aboutUsAnchorTag">
    <p class="bodyTitle">Affordable care tailored to your vehicle's needs</p>
    <div class="container">
        <div class="card-b">
            <div class="textbox">
                <p>An <span style="color:#87CEEB">affordable</span> price</p>
                <p>We offer competitive pricing on tires and batteries because we believe you 
                    deserve the best without breaking the bank. With years of experience, 
                    we've honed our ability to provide top-quality products at prices that 
                    suit your budget. Prices vary depending on size and application.
                </p>    
            </div>
        </div>
        <div class="card-w">
            <div class="textbox">
                <p><span style="color:#4169E1">Speed</span> and <span style="color:#4169E1">quality</span></p>
                <p>We pride ourselves on quick service, same-day in most cases, warrantied and done right the
                    first time. We understand that your time is valuable, and any company vehicle
                    that is not on the road making you money is costing you money.</p>
            </div>
        </div>
        <div class="card-w card-3">
            <div class="textbox">
                <p><span style="color:#4169E1">Every</span> type of service</p>
                <p>We are a full service auto repair shop that offers everything from oil changes,
                    brakes, alignments and more. We have 16 years of experience in servicing
                    commercial fleet vehicles, and accept all fleet management companies.</p>
            </div>
        </div>
        <div class="card-b card-4">
            <div class="textbox">
                <p>A <span style="color:#87CEEB">family</span> of Engineers</p>
                <p>At RJ's Automotive Center, we're more than just a team — we're a family of engineers dedicated to 
                    treating your vehicle with the same meticulous care and expertise as we would our own.
                </p>
            </div>
        </div>
    </div>
</div>

<style>
    @media screen and (max-width: 950px) {
        .container{
            grid-template-columns: 1fr !important;
        }

        .card-4 {
            order: 2; 
        }

        .card-3 {
            order: 4;
        }
    }

    .body{
        padding-top: 50px;
        display: flex;
        align-items: center;
        flex-direction: column;
        align-items: center;
    }

    .bodyTitle{
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        font-weight: 200;
        font-size: 35px;
        margin-block: 70px;
    }

    .container{
        display: grid;
        height: 60%;
        width: clamp(200px, 80%, 1500px);
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 2em 5em;
        margin-bottom: 100px;
    }

    /* Targets all cards */
    .container > *{
        height: 100%;
        width: 100%;
        font-size: 18px;
        font-weight: 200;
    }

    .card-b {
        background-color: #363636;
        border-radius: 20px;
        color: #EFF0F6;
    }

    .card-w {
        background-color: none;
    }

    .textbox{
        padding: 30px;
    }

    .textbox>*:first-child{
        font-size: 24px;
        font-weight: 500;
    }

</style>