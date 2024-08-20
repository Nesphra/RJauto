<div class="wrapper">
    <div class="insideWrap">
        <p>Give your vehicle the love it deserves.</p>
        <a href="/contact">Get in contact</a>
    </div>
</div>

<style>
    @media screen and (max-width: 950px){
        .wrapper{
            flex-direction: column;
            padding-inline: 0 !important;
        }
    }

    p{
        width: 80%;
    }

    .wrapper{
        background-color: #363636;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .insideWrap{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60%;
        padding: 30px;
        height: 300px;
    }

    .insideWrap>*:first-child{
        font-weight: 200;
        font-size: 36px;
        text-align: center;
        color: white;
    }

    .insideWrap>*:last-child{
        padding: 15px;
        background-color: #18A0FB;
        width:min-content;
        white-space: nowrap;
        border-radius: 6px;
        color: #EFF0F6;
    }

    .insideWrap>*:last-child:hover{
        color: #363636;
        background-color: #EFF0F6;
    }
</style>