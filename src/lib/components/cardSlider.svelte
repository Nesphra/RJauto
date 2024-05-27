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

<Splide hasTrack={ false } 
    options={{
        type   : 'loop',
        padding: '20%',
        autoplay: true,
    }}
    >    
    <div class="customWrapper">      
        <SplideTrack>
            <SplideSlide>
                <div class="container">
                    <div class="card">
                        <div class="text">
                            <h1>Fleet Maintenance</h1>
                            <p class="body">yo</p>
                            <a href="/price">See Price</a>
                        </div>
                        <div class="image">
                            <img class="image" src="src/lib/images/serviceImages/mechanicDude.jpg" alt="Image 1"/>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="container">
                    <div class="card">
                        <div class="text">
                            <h1>Fleet Maintenance</h1>
                            <p class="body">yo</p>
                            <a href="/price">See Price</a>
                        </div>
                        <div class="image">
                            <img class="image" src="src/lib/images/serviceImages/mechanicDude.jpg" alt="Image 1"/>
                        </div>
                    </div>
                </div>
            </SplideSlide>
        </SplideTrack>
    </div>
</Splide>

<style>
    @import '@splidejs/svelte-splide/css/sea-green';

    .splide__pagination {
        counter-reset: pagination-num;
    }

    .container{
        width: 100%;
        height: 400px;
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
        text-align: center;
        width: 100%;
        margin: 0;
        padding: 0;
    }
</style>