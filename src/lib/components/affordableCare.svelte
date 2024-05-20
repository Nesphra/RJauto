<div class="body">
    <p class="bodyTitle">Affordable care tailored to your vehicle's needs</p>
    <div class="container">
        <div class="card-b">
            <div class="textbox">
                <p>An <span style="color:#87CEEB">affordable</span> price</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magni explicabo quisquam doloremque tempora deleniti incidunt tempore facilis quasi. Facilis perspiciatis iusto dolore, non repellat deserunt velit ducimus sit placeat.</p>    
            </div>
        </div>
        <div class="card-w">
            <div class="textbox">
                <p>Out-of-this-world <span style="color:#4169E1">quality</span></p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ratione tenetur sit cupiditate, optio saepe unde architecto quisquam illum hic earum natus iure commodi perspiciatis dolores numquam! Cumque, temporibus sit!</p>
            </div>
        </div>
        <div class="card-w">
            <div class="textbox">
                <p><span style="color:#4169E1">Every</span> type of service</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nam distinctio eius. Id consectetur sit atque maxime, nemo neque reprehenderit minus, soluta quod sapiente, aliquid eos nisi quibusdam necessitatibus dicta officia dolor impedit repellendus nihil.</p>
            </div>
        </div>
        <div class="card-b">
            <div class="textbox">
                <p>A <span style="color:#87CEEB">family</span> of Engineers</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, cupiditate architecto. Deleniti officia voluptatum nam fugit dolores nisi vero dignissimos nemo, architecto possimus id quaerat iure corrupti nostrum harum vel! Dolores, facilis voluptatem!</p>
            </div>
        </div>
    </div>
</div>

<style>
    .body{
        position: relative; 
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .bodyTitle{
        width: 90%;
        margin-block: 100px;
        font-weight: 200;
        font-size: 35px;
    }

    .container{
        display: grid;
        height: 60%;
        width: 90%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 2em;
        margin-bottom: 100px;
    }

    /* Targets all cards */
    .container > *{
        height: 100%;
        width: 100%;
        font-size: 18px;
        font-weight: 200;
    }

    .card-b {
        background-color: #363636;
        border-radius: 20px;
        color: #EFF0F6;
    }

    .card-w {
        background-color: none;
    }

    .textbox{
        padding: 30px;
    }

    .textbox>*:first-child{
        font-size: 24px;
        font-weight: 500;
    }

</style>