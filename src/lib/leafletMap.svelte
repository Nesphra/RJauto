<script>
    import { onMount, onDestroy } from 'svelte';

    let mapElement;
    let map;

    onMount(async () => {
        const leaflet = await import('leaflet');

        var newIcon = leaflet.icon({
            iconUrl: 'images/marker-icon_copy.png',
            shadowUrl: 'images/marker-shadow_copy.png',

            iconSize:     [25, 40], // size of the icon
            shadowSize:   [25, 40], // size of the shadow
            iconAnchor:   [13, 45], // point of the icon which will correspond to marker's location
            shadowAnchor: [8, 45],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

        })

        console.log(newIcon)

        map = leaflet.map(mapElement).setView([29.866890, -95.573620], 17);

        leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        leaflet.marker([29.8668, -95.5736], {icon: newIcon}).addTo(map)
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

    @media screen and (max-width:950px){
        main div {
            height: 450px !important;
        }
    }

    @media screen and (max-width:400px){
        main div{
            height: 300px !important;
        }
    }

    main div {
        height: 600px;
    }
</style>
