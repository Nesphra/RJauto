<script>
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	// import { onMount } from 'svelte';

    // onMount(() => {
    //     document.addEventListener( 'DOMContentLoaded', function () {
    //         new Splide( '#card-carousel', {
    //                 perPage    : 2,
    //                 breakpoints: {
    //                     640: {
    //                         perPage: 1,
    //                     },
    //                 },
    //         } ).mount();
    //     } );
    // })
</script>

<Splide hasTrack={ false } options={{
    type: 'loop',
    padding: '25%',
    autoplay: true,
}}>    
    <SplideTrack>
        <SplideSlide>
            <div class="container">
                <div class="card">
                    <div class="text">
                        <h1>Fleet Maintenance</h1>
                        <a href="/prices">Learn More</a>
                    </div>
                    <div class="image">
                        <img class="image" src="src/lib/images/serviceImages/mechanic.jpg" alt="Image 1"/>
                    </div>
                </div>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div class="container">
                <div class="card">
                    <div class="text">
                        <h1>Tire Work</h1>
                        <a href="/prices">Learn More</a>
                    </div>
                    <div class="image">
                        <img class="image" src="src/lib/images/serviceImages/top-view-woman-repairing-car_23-2150171260.jpg" alt="Image 1"/>
                    </div>
                </div>
            </div>
        </SplideSlide>
    </SplideTrack>
</Splide>

<style>
    @import '@splidejs/svelte-splide/css/sea-green';

    .container{
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card{
        width: 80%;
        background-color: #363636;
        height: 100%;
        border-radius: 15px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .text{
        color: #FFF;
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    a {
        padding: 10px 15px 10px 15px;
        font-size: 12px;
        width:min-content;
        white-space: nowrap;
        border-radius: 6px;
        background-color: #18A0FB;
        color: #EFF0F6;
    }

    a:hover{
        transform: scale(1.1) rotate(4deg);
    }
</style>