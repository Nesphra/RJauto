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
                    <p class="cardTitle">Name of Service</p>
                    <p class="desc">Quick description</p>
                    <p class="price">$$</p>
                </div>
                <div class="gridItem">
                    <p class="cardTitle">Name of Service</p>
                    <p class="desc">Quick description</p>
                    <p class="price">$$</p>
                </div>
                <div class="gridItem">
                    <p class="cardTitle">Name of Service</p>
                    <p class="desc">Quick description</p>
                    <p class="price">$$</p>
                </div>
                <div class="gridItem">
                    <p class="cardTitle">Name of Service</p>
                    <p class="desc">Quick description</p>
                    <p class="price">$$</p>
                </div>
                <div class="gridItem">
                    <p class="cardTitle">Name of Service</p>
                    <p class="desc">Quick description</p>
                    <p class="price">$$</p>
                </div>
                <div class="gridItem">
                    <p class="cardTitle">Name of Service</p>
                    <p class="desc">Quick description</p>
                    <p class="price">$$</p>
                </div>
                <div class="gridItem">
                    <p class="cardTitle">Name of Service</p>
                    <p class="desc">Quick description</p>
                    <p class="price">$$</p>
                </div>
                <div class="gridItem">
                    <p class="cardTitle">Name of Service</p>
                    <p class="desc">Quick description</p>
                    <p class="price">$$</p>
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
            color: #4169E1 !important;
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
    }

    .desc{ 
        font-size: 16px;
    }

    .price{
        font-size: 18px;
        font-weight: 500;
    }
</style>