<script>
	import NavBar from '../../lib/components/navBar.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div>
    <NavBar></NavBar>
    <div class="container">
        <div class="form">
            <div class="email">
                <form action="beaurainromeo@gmail.com" method="post" enctype="text/plain">
                    FirstName: <input type="text" name="FirstName">
                    Email: <input type="text" name="Email">
                    <input type="submit" name="submit" value="Submit">
                </form>
            </div>
            <div class="info"></div>
        </div>
    </div>
</div>

<style>

</style>