<script>
	import FrontPageTopBar from '../lib/components/FrontPageTopBar.svelte';
	import AffordableCare from '../lib/components/affordableCare.svelte';
	import CarMatters from '../lib/components/carMatters.svelte';
	import Footer from '../lib/components/footer.svelte';
	import GoodCompany from '../lib/components/goodCompany.svelte';
	import Location from '../lib/components/location.svelte';
	import NavBar from '../lib/components/navBar.svelte';
	import Services from '../lib/components/services.svelte';
	import VehicleLove from '../lib/components/vehicleLove.svelte';
</script>

<div class="home">
	<section class="landingPage">
		<div class="topBar">
			<FrontPageTopBar></FrontPageTopBar>
		</div>
		<div class="wrapperBg">
			<div class="bg-rect"></div>
		</div>
		<div class="safeVehicle">
			<h3>YOUR VEHICLE IS</h3>
			<h1>SAFE IN OUR HANDS</h1>
			<div class="app-serv">
				<a href="/contact">Contact Us</a>
				<a href="/prices">See our Prices</a>
			</div>
		</div>
		<img src={"/images/blueCar.png"} alt="blue car" class="carPic" />
		<div class="frontPageLinks">
			<li><a href="/#servicesAnchorTag">Services</a></li>
			<li><a href="/#locationAnchorPoint">Location</a></li>
			<li><a href="/#teamAnchorTag">Meet the Team</a></li>
		</div>
	</section>
</div>
<Services></Services>
<NavBar></NavBar>
<AffordableCare></AffordableCare>
<CarMatters></CarMatters>
<Location></Location>
<VehicleLove></VehicleLove>
<GoodCompany></GoodCompany>
<Footer></Footer>

<style>

	@media screen and (max-width: 800px) {
		.frontPageLinks{
			display: none;
		}
		.topBar{
			display: none;
		}
		.landingPage{
			margin-top: 80px;
		}
		.carPic{
			top: 320px !important;
			height: auto !important;
			height: clamp(100px, 50vw, 300px) !important;
		}
	}

	@media screen and (max-width: 450px) {
		.landingPage{
			height: 450px !important;
		}
	}

	/* Front page */
	.landingPage {
		height: 580px;
	}

	.wrapperBg{
		position: relative;
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

	.safeVehicle > *:first-child {
		color: #eff0f6;
		font-weight: 300;
		font-size: 24px;
		margin: 0;
	}

	.safeVehicle > *:nth-child(2) {
		color: #eff0f6;
		font-weight: 500;
		font-size: 3rem;
		margin: 0;
		text-align: center;
	}

	.app-serv {
		display: flex;
		column-gap: 20px;
		padding: 20px;
	}

	.app-serv>a{
        padding: 15px;
        border-radius: 10px;
    }

	.app-serv > *:first-child {
		background-color: #eff0f6;
		color: #363636;
	}

	.app-serv > *:first-child:hover{
		transform: scale(1.1);
	}

	.app-serv > *:last-child {
		background-color: #4169e1;
		color: #eff0f6;
	}

	.app-serv > *:last-child:hover{
		transform: scale(1.1);
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

	.frontPageLinks > li:hover {
		transform: translateX(5px);
		transition: 0.2s;
	}
</style>
