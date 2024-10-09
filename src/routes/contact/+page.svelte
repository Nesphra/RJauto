<script>
	import NavBar from "../../lib/components/navBar.svelte";

    export let form;
</script>

<NavBar></NavBar>
<div class="bg-rect"></div>
<div class="wrapper">
    <p class="mainTitle">Contact form</p>
    <div class="card">
        <div class="form" >
            <form method="POST" class="container">
                <p class="title">Email us!</p>
                <input class="input" name="to" type="email" value="" placeholder="Email" autocomplete="off"/>
                <input class="input" name="subject" type="text" value="" placeholder="Subject" autocomplete="off"/>
                <textarea class="input" name="body" rows="6" value="" placeholder="Request" autocomplete="off"/>
                <button type="submit">Send</button>
                <p class="success">{form?.success || ""}</p>
            </form>
        </div>
        <div class="info">
            <div class="info-info">
                <p class="title">Our information</p>
                <hr>
                <p>We're open for any suggestion or just to have a chat.</p>
                <ul class="list">
                    <li>Address: 11131 W Little York, Houston, TX</li>
                    <li>Phone: +1 (832)-295-3337, +1 832-295-3803</li>
                    <li>E-mail: rjsautomotivecenter@gmail.com</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<style>

    @media screen and (max-width: 800px) {
        .info{
            display: none !important;
        }
        .bg-rect{
            display: none;
        }
        .card{
            background-color: blue;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100% !important;
            filter: none !important; 
        }
        .mainTitle{
            display: none;
        }
    }

    .list > li{
        line-height: normal;
        margin-block: 25px;
    }

    .info-info{
        width: 85%;
    }

    .info-info hr{
        width: 50px;
        margin: 10px 0 0 0;
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
    .info{
        display: flex;
        align-items: center;
        flex-direction: column;
        color: #FFF; 
        width: 100%;
        height: 100%;
        background: linear-gradient(154deg, #4169E1 14.5%, #1F3370 87.86%); 
    }

    .wrapper{
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .card{
        border-radius: 20px;
        overflow: hidden;
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
        align-items: center;
        gap: 10px;
        height: 100%;
    }

    .title{
        padding-top: 20px;
        font-size: 26px;
        margin: 0;
        font-weight: 300;
    }

    .container>*:nth-child(2), .container>*:nth-child(3), .container>*:nth-child(4){
        padding: 8px;
        border: none;
        resize: none;
        border-radius: 5px;
        width: 80%;
    }

    textArea{
        height: 180px;
    }

    .container button{
        background: linear-gradient(270deg, #4169E1 0%, #2C448B 100%); 
        padding: 10px 20px 10px 20px;
        color: white;
        border: none;
        border-radius: 10px;
        font-family: "Inter", sans-serif;
        font-weight: 200;
        font-size: 15px;
    }

    .success{
        color: rgb(60, 183, 66);
    }

    .mainTitle{
        margin: 10px;
        color: #85B2F4;
        font-weight: 300;
        font-size: 26px;
    }
</style>