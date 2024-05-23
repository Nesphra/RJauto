<script>
	import NavBar from "../../lib/components/navBar.svelte";

    export let form;
</script>

<NavBar></NavBar>
<div class="bg-rect"></div>
<div class="wrapper">
    <p>Contact form</p>
    <div class="card">
        <div class="form">
            <form method="POST" class="container">
                <p>Email us</p>
                <input class="input" name="to" type="email" value="" placeholder="Email"/>
                <input class="input" name="subject" type="text" value="" placeholder="Subject"/>
                <textarea class="input" name="body" rows="6" value="" placeholder="Request"/>
                <button type="submit">Send</button>
                <p class="success">{form?.success || ""}</p>
            </form>
        </div>
        <div class="info"></div>
    </div>
</div>

<style>
    .wrapper{
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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

    .card{
        height: 500px;
        width: 800px;
        display: flex;
        filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25)); 
    }

    .form {
        width: 100%;
        height: 100%;
        background-color: #EFF0F6;
    }

    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }

    .input{
        width: 80%;
        
    }

    .info{
        width: 100%;
        height: 100%;
        background: linear-gradient(154deg, #4169E1 14.5%, #1F3370 87.86%); 
    }
</style>