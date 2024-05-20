<script>
	import FrontPageTopBar from '../lib/components/FrontPageTopBar.svelte';
	import AffordableCare from '../lib/components/affordableCare.svelte';
	import CarMatters from '../lib/components/carMatters.svelte';
	import Location from '../lib/components/location.svelte';
	import NavBar from '../lib/components/navBar.svelte';
	import Services from '../lib/components/services.svelte';
</script>

<div class="home">
	<section class="landingPage">
		<FrontPageTopBar></FrontPageTopBar>
		<div class="bg-rect"></div>
		<div class="safeVehicle">
			<h3>YOUR VEHICLE IS</h3>
			<h1>SAFE IN OUR HANDS</h1>
			<div class="app-serv">
				<a href="/contact">Make an appointment</a>
				<a href="/prices">See our prices</a>
			</div>
		</div>
		<img src="src/lib/images/Image-Source-PlusPNG.com.png" alt="blue car" class="carPic" />
		<!-- Source : <a title="Blue Race Car PNG" href="https://pluspng.com/blue-race-car-png-9423.html">Blue Race Car PNG</a> -->
		<div class="frontPageLinks">
			<li><a href="#servicesAnchorTag">Home & Services</a></li>
			<li><a href="/prices">Pricing</a></li>
			<li><a href="#">Location</a></li>
			<li><a href="#">Meet the Team</a></li>
		</div>
	</section>
	<Services></Services>
	<NavBar></NavBar>
    <AffordableCare></AffordableCare>
    <CarMatters></CarMatters>
    <Location></Location>
</div>

<style>
	/* Front page */
	.landingPage {
		height: 580px;
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

	.safeVehicle {
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

    .safeVehicle>*:first-child{
        color: #EFF0F6;
        font-weight: 300;
        font-size: 24px;
        margin: 0;
    }

    .safeVehicle>*:nth-child(2){
        color: #EFF0F6;
        font-weight: 500;
        font-size: 56px;
        margin:0;
    }

    .app-serv{
        display: flex;
        column-gap: 20px;
        padding: 20px;
    }

    .app-serv>a{
        padding: 15px;
        border-radius: 10px;
    }

    .app-serv>*:first-child{
        background-color: #EFF0F6;
        color: #363636;
    }

    .app-serv>*:last-child{
        background-color: #4169E1;
        color: #EFF0F6;
        border: 1px solid #EFF0F6; 
    }
    
	.frontPageLinks {
		position: absolute;
		top: 320px;
		margin-left: 50px;
        font-size: 20px;
	}

	.frontPageLinks > li::marker {
		content: '-> ';
		color: white;
	}

	.carPic {
		height: 300px;
		position: absolute;
		top: 290px;
		left: 50%;
		transform: translate(-50%);
	}

	a:hover {
		color: #87ceeb;
	}

   .frontPageLinks>li:hover {
        transform: translateX(5px);
        transition: 0.2s;
    }

</style>
