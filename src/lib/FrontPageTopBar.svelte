<script>
    var currentdate = new Date(); 
    var hours = currentdate.getHours()
    var day = currentdate.getDay()

    var StoreOpen
    if (8 <= hours && hours < 17 && day <= 5) {
        StoreOpen = "OPEN"
    } else {
        StoreOpen = "CLOSED"
    }
</script>

<div>
    <div class = "topLine">
        <div id="Item1">WE ARE {StoreOpen}</div>
        <div id="Item2">Call Us: +1 (713) 896-4105</div>
        <div id="Item3">Email Us: russell.fuller0872@gmail.com</div>
        <div id="Socials"><button>In</button>></div>
    </div>    
</div>

<style>
    .topLine {
        width: 100%;
        height: 30px;
        background-color: blue;
        display: flex;
        align-items: center;
    }

    .topLine>*{
        width: 100%;
        background-color: red;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .topLine>*:last-child>button{
        background-color: non;
    }

</style>