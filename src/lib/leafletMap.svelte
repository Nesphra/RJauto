<script>
    import { onMount, onDestroy } from 'svelte';

    let mapElement;
    let map;

    onMount(async () => {
        const leaflet = await import('leaflet');

        map = leaflet.map(mapElement).setView([29.880310, -95.609820], 17);

        leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        leaflet.marker([29.8807, -95.6089]).addTo(map)
            .bindPopup("Come say hi!")
            .openPopup();
    });

    onDestroy(async () => {
        if(map) {
            console.log('Unloading Leaflet map.');
            map.remove();
        }
    });
</script>


<main>
    <div bind:this={mapElement}></div>
</main>

<style>
    @import 'leaflet/dist/leaflet.css';
    main div {
        height: 800px;
    }
</style>
