<script>
	var iconHeight = "20px"
</script>

<section class="container" id="servicesAnchorTag">
    <div class="servicesText">
        <h1>Our Featured Services</h1>
        <h5>Our commitment to excellence ensures that we provide everything you need under one roof.</h5>
    </div>

    <div class="buttons">
        <li><img alt="info icon" class="icons" src="src/lib/images/icons/info.svg" height="{iconHeight}"><a href="#">Diagnostics</a></li>
        <li><img alt="info icon" class="icons" src="src/lib/images/icons/info.svg" height="{iconHeight}"><a href="#">Tires & Alignments</a></li>
        <li><img alt="info icon" class="icons" src="src/lib/images/icons/info.svg" height="{iconHeight}"><a href="#">Fleet Maintenance</a></li>
        <li><img alt="info icon" class="icons" src="src/lib/images/icons/info.svg" height="{iconHeight}"><a href="#">Brake Repair</a></li>
        <li><img alt="info icon" class="icons" src="src/lib/images/icons/info.svg" height="{iconHeight}"><a href="#">Steering & Suspensions</a></li>
        <li><img alt="info icon" class="icons" src="src/lib/images/icons/info.svg" height="{iconHeight}"><a href="#">Air Conditioning</a></li>
        <li><img alt="info icon" class="icons" src="src/lib/images/icons/info.svg" height="{iconHeight}"><a href="#">State Inspections</a></li>
    </div>

    <div class="sliderContainer">
        <div class="slide">
            <div class="slide-text">
                <p>Fleet Maintenance</p>
                <p>Fleet maintenance is an essential aspect of managing a group of  vehicles used for business purposes. From delivery trucks and company  cars to specialized machinery, fleet maintenance encompasses a range of  activities aimed at ensuring the optimal performance, safety, and  longevity of these vehicles.</p>
                <a href="/prices">See Price</a>
            </div>
            <div class="slide-image-container"><img class="slide-image" src="src/lib/images/serviceImages/male-mechanics-working-together-car-shop_23-2150376966.jpg" alt="dude working on a car"></div>
        </div>
        <div class="slide">
            <div></div>
            <div></div>
        </div>
    </div>
</section>

<style>
    .container{
        margin: auto;
        width: 80%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .servicesText{
        display: flex;
        padding: 0;
        margin: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .servicesText>*:first-child{
        margin: 0;
        font-weight: 500;
        font-size: 32px;
    }

    .servicesText>*:last-child{
        margin: 5px 0 30px 0;
        font-weight: 300;
        font-size: 16px;
    }

    .buttons{
        display: flex;
        list-style: none;
        column-gap: 20px;
        width: 80%;
        padding-bottom: 10px;
        overflow-x: scroll;
        white-space: nowrap;

    }

    .buttons>li{
        background-color: #363636;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 5px;
        transition: 0.2s;
    }

    .buttons>li:hover{
        cursor: pointer;
        background-color: #4169E1;
    }

    .slide{
        display: flex;
        column-gap: 30px;
        padding: 50px 0 0 0;
    }

    .slide-image-container{
        width: 100%;
        height: 500px;
    }

    .slide-image{
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        object-fit: cover;
    }

    .slide-text{
        width: 100%;
        display: flex;
        flex-direction: column;

    }

    .slide-text>*:first-child {
        font-size: 28px;
        margin: 0;
        font-weight: 500;
    }
    
    .slide-text>*:nth-child(2) {
        font-size: 20px;
        font-weight: 300;
    }

    .slide-text>a{
        color: #EFF0F6;
        background-color: #4169E1;
        padding: 15px 20px 15px 20px;
        margin-top: 10px;
        margin-inline: auto;
        border-radius: 10px;
        cursor: pointer;
    }

    .slide-text>a:hover{
        transform: rotate(3deg) scale(1.05);
    }

</style>
