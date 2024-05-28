<script>
	import CardSlider from "./cardSlider.svelte";

	var iconHeight = "20px"
</script>

<section class="container" id="servicesAnchorTag">
    <div class="servicesText">
        <h1>Our Featured Services</h1>
        <h5>Our commitment to excellence ensures that we provide everything you need under one roof.</h5>
    </div>
    <CardSlider></CardSlider>
</section>

<style>
    @media screen and (max-width: 800px) {
        
    }

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
        text-align: center;
    }
</style>
