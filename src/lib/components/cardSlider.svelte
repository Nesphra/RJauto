<script>
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    
</script>

<div class="thisIsClass">
    <Splide hasTrack={ false } options={{
        type: 'loop',
        autoplay: true,
        focus: 'center',
        // padding: '18vw',
    }}>    
        <SplideTrack>
            <SplideSlide>
                <div class="container">
                    <div class="card">
                        <div class="text">
                            <h1>Fuel Injection & Throttle Body Cleaning</h1>
                            <a href="/prices">Learn More</a>
                        </div>
                        <div class="image">
                            <img class="image" src={"/images/serviceImages/mechanic.jpg"} alt="Image 1"/>
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
                            <img class="image" src={"/images/serviceImages/top-view-woman-repairing-car_23-2150171260.jpg"} alt="Image 1"/>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="container">
                    <div class="card">
                        <div class="text">
                            <h1>State Inspection</h1>
                            <a href="/prices">Learn More</a>
                        </div>
                        <div class="image">
                            <img class="image" src={"/images/serviceImages/top-view-woman-repairing-car_23-2150171260.jpg"} alt="Image 1"/>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="container">
                    <div class="card">
                        <div class="text">
                            <h1>Lube, Oil & Filter</h1>
                            <a href="/prices">Learn More</a>
                        </div>
                        <div class="image">
                            <img class="image" src={"/images/serviceImages/top-view-woman-repairing-car_23-2150171260.jpg"} alt="Image 1"/>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="container">
                    <div class="card">
                        <div class="text">
                            <h1>Brake Services</h1>
                            <a href="/prices">Learn More</a>
                        </div>
                        <div class="image">
                            <img class="image" src={"/images/serviceImages/top-view-woman-repairing-car_23-2150171260.jpg"} alt="Image 1"/>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="container">
                    <div class="card">
                        <div class="text">
                            <h1>Wheel care</h1>
                            <a href="/prices">Learn More</a>
                        </div>
                        <div class="image">
                            <img class="image" src={"/images/serviceImages/top-view-woman-repairing-car_23-2150171260.jpg"} alt="Image 1"/>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="container">
                    <div class="card">
                        <div class="text">
                            <h1>Engine Diagnostics</h1>
                            <a href="/prices">Learn More</a>
                        </div>
                        <div class="image">
                            <img class="image" src={"/images/serviceImages/top-view-woman-repairing-car_23-2150171260.jpg"} alt="Image 1"/>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="container">
                    <div class="card">
                        <div class="text">
                            <h1>Radiator Coolant Flush</h1>
                            <a href="/prices">Learn More</a>
                        </div>
                        <div class="image">
                            <img class="image" src={"/images/serviceImages/top-view-woman-repairing-car_23-2150171260.jpg"} alt="Image 1"/>
                        </div>
                    </div>
                </div>
            </SplideSlide>
        </SplideTrack>
    </Splide>
</div>

<style>
    @import '@splidejs/svelte-splide/css/sea-green';

    @media screen and (max-width: 800px){
        .image{
            display: none !important;
        }

        .thisIsClass{
            width: 100vw !important;
        }
    }

    h1{
        width: 80%;
    }

    .thisIsClass{
        width: 80vw;
        max-width: 900px;
    }

    .container{
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card{
        width: 90%;
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