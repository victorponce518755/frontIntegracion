<script>
  import { onMount } from "svelte";

  export let latitud;
  export let longitud;
  console.log("soy yo", latitud, longitud);
  //imprimir el tipo de dato de latitud y longitud
  console.log(typeof latitud, typeof longitud);

  let map;

  function initMap() {
    const coordinates = {
      lat: typeof latitud === "object" ? parseFloat(latitud) : latitud,
      lng: typeof longitud === "object" ? parseFloat(longitud) : longitud,
    };
    map = new google.maps.Map(document.getElementById("map"), {
      center: coordinates,
      zoom: 12, // Puedes ajustar el nivel de zoom según tu preferencia
    });

    new google.maps.Marker({
      position: coordinates,
      map: map,
      title: "Ubicación",
    });
  }

  onMount(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBOl9KPanbEwu93Mf_Ms2XZ_qAMzEY9tDc&callback=initMap`;
    script.defer = true;
    script.async = true;
    window.initMap = initMap;
    document.head.appendChild(script);
  });
</script>

<main>
  <div id="map" class="mt-5"></div>
</main>

<style>
  #map {
    width: 100%;
    height: 400px; /* Puedes ajustar la altura del mapa según tu diseño */
  }
</style>
