<div class="wrapper">
    <p>Give your vehicle the love it deserves.</p>
    <a href="/contact">Get in contact</a>
</div>

<style>
    @media screen and (max-width: 950px){
        .wrapper{
            flex-direction: column;
            padding-inline: 0 !important;
        }
    }

    .wrapper{
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 100px;
        background-color: #363636;
        color: #EFF0F6;
    }

    .wrapper>*:first-child{
        font-weight: 200;
        font-size: 36px;
        text-align: center;
    }

    .wrapper>*:last-child{
        padding: 15px;
        width:min-content;
        white-space: nowrap;
        border-radius: 6px;
        background-color: #18A0FB;
        color: #EFF0F6;
    }

    .wrapper>*:last-child:hover{
        color: #363636;
        background-color: #EFF0F6;
    }
</style>