<script>
	import NavBar from '../../lib/components/navBar.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="containerWrapper">
    <div class="navigation">
        <NavBar></NavBar>
    </div>
    <div class="containerBg">
        <div class="bg-rect"></div>
    </div>
        <div class="wrapper">
            <div class="headerTitle">
                <p class="title">Offered <span style="color: #87CEEB;">Services</span></p>
                <p class="body">offered services include, but are not limited to:</p>
            </div>
            <div class="gridline">
                <div class="gridItem">
                    <p class="cardTitle">Lube, Oil & Filter (Up to 6 quarts/synthetic)</p>
                    <p class="desc"> Keeps your engine running smoothly, improves fuel efficiency, and extends engine life.
                    </p>
                    <p class="price">$99</p>
                </div>
                <div class="gridItem">
                    <p class="cardTitle">Transmission Service</p>
                    <p class="desc">Ensures smooth gear shifting, prevents transmission wear, and prolongs the lifespan of your vehicle’s transmission.</p>
                    <p class="price">$189</p>
                </div>
                <div class="gridItem">
                    <p class="cardTitle">Radiator Coolant Flush</p>
                    <p class="desc">Prevents engine overheating, protects against corrosion, and maintains optimal engine temperature.</p>
                    <p class="price">129$</p>
                </div>
                <div class="gridItem">
                    <p class="cardTitle">Fuel Injection & Throttle Body Cleaning-</p>
                    <p class="desc">Enhances fuel efficiency, restores engine power, and reduces emissions.</p>
                    <p class="price">$139</p>
                </div>
                <div class="gridItem">
                    <p class="cardTitle">Wheel Balance (per wheel)</p>
                    <p class="desc">Provides a smoother ride, extends tire life, and improves vehicle handling.</p>
                    <p class="price">$20</p>
                </div>
                <div class="gridItem">
                    <p class="cardTitle">4 Wheel Alignment</p>
                    <p class="desc">Promotes even tire wear, improves steering control, and maximizes fuel efficiency.</p>
                    <p class="price">$99</p>
                </div>
                <div class="gridItem">
                    <p class="cardTitle">Brake Service</p>
                    <p class="desc">Ensures safe braking, extends the life of brake components, and enhances overall driving safety.</p>
                    <p class="price">$199</p>
                </div>
                <div class="gridItem">
                    <p class="cardTitle">Computerized Engine Diagnostic (check engine light)</p>
                    <p class="desc">Quickly identifies issues, prevents costly repairs, and keeps your engine running efficiently.</p>
                    <p class="price">$120</p>
                </div>
                <div class="gridItem">
                    <p class="cardTitle">State Inspection</p>
                    <p class="desc">Ensures your vehicle meets safety and emissions standards, keeping you compliant with state regulations.</p>
                    <p class="price">$25.50</p>
                </div>
                <div class="gridItem">
                    <p class="cardTitle">Labor (per hour)</p>
                    <p class="desc">Provides expert service, ensuring that repairs are done right the first time to keep your vehicle in top condition.</p>
                    <p class="price">$120</p>
                </div>
            </div>
        </div>
</div>

<style>
    @media screen and (max-width: 800px){
        .containerBg{
            display: none;
        }
        .headerTitle{
            color: black !important;
        }
    }

    .containerBg{
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    .containerWrapper{
        overflow-x: hidden;
    }

    .bg-rect {
		width: 110%;
		height: 1000px;
		background-color: #363636;
		border-radius: 200px;
		position: absolute;
		transform: translate(-8%, -60%) rotate(-9.3deg);
		z-index: -1;
	}

    .wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-block: 50px;
    }

    .headerTitle{
        text-align: center;
        margin: 50px;
        color: #EFF0F6;
    }

    .headerTitle>*:first-child{
        font-size: 36px;
        margin: 0;
        padding: 0;
    }
    .headerTitle>*:last-child{
        font-size: 20px;
        margin: 0;
        padding: 0;
    }

    .gridline{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 50px 50px;
    }

    .gridItem {
        height: 250px;
        width: 400px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        background-color: #FFF;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    .cardTitle {
        font-size: 22px;
        font-weight: 500;
        text-align: center;
        height: 30px;
    }

    .desc{ 
        font-size: 16px;
        text-align: center;
        height: 50px;
        margin-inline: 10px;
    }

    .price{
        font-size: 18px;
        font-weight: 500;
    }
</style>