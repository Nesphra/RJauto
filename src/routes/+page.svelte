<script>
	import FrontPageTopBar from "../lib/FrontPageTopBar.svelte";
	import NavBar from "../lib/navBar.svelte";
	import Services from "../lib/services.svelte";
</script>

<div class="home" id="homeAnchorTag">
    <div class="landingPage">
        <FrontPageTopBar></FrontPageTopBar>
        <div class="bg-rect"></div>
        <div class="safeVehicle">
            <h3>YOUR VEHICLE IS</h3>
            <h1>SAFE IN OUR HANDS</h1>
            <div>
                <button>Make an appointment</button>
                <button>See all our services</button>
            </div>
        </div>
        <img src="src/srcImages/Image-Source-PlusPNG.com.png" alt="blue car" class="carPic">
            <!-- Source : <a title="Blue Race Car PNG" href="https://pluspng.com/blue-race-car-png-9423.html">Blue Race Car PNG</a> -->
        <div class="frontPageLinks">
            <li><a href="#homeAnchorTag">Home & Services</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">Meet the Team</a></li>
        </div>
        <Services></Services>
    </div>

    <NavBar></NavBar>
    
    <div class="textBoxes">
        Textboxes, awesome
    </div>
    
</div>

<style>

    /* Front page */
    .landingPage{
        width: 100%;
        height: 1250px;
    }

    .bg-rect{
        width: 110%;
        height: 1000px;
        background-color: #363636;
        border-radius: 200px;
        position: absolute;
        transform: translate(-8%, -55%) rotate(-9.3deg);
        z-index: -1;
    }

    .safeVehicle {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .frontPageLinks{
        position: absolute;
        top: 350px;
        margin-left: 50px;
    }

    .frontPageLinks > li::marker{
        content: "-> ";
        color: white;
    }

    .carPic{
        height: 300px;
        position: absolute;
        top: 320px;
        left: 50%;
        transform: translate(-50%);
    }

    /* TextBoxes */
    .textBoxes{
        /* background-color: blue; */
        height: 1000px;
        width: 100%;
    }

</style>