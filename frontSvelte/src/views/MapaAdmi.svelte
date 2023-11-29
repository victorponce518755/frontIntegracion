<script>
  import Navbar from "../components/Navbar.svelte";
  import { onDestroy, onMount } from "svelte";
  import { boletoStore } from "../stores/boletoStore";

  import GoogleMapsAdmi from "../components/googleMaps/googleMapsAdmi.svelte";

  export let microservicioURL;
  let url = `${microservicioURL}ticket`;

  let boletoId = null;
  let cordenadas = null;
  let latitud = null;
  let longitud = null;

  let mapLoaded = false;

  async function obtenerCordenadas(boletoNum) {
    if (boletoNum !== null) {
      const datosBoleto = {
        id: boletoNum,
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datosBoleto),
        });

        if (response.status === 405) {
          console.log("Error: Método no permitido (405)");
        } else if (response.ok) {
          try {
            const data = await response.json();
            cordenadas = data;
            latitud = data.latitud;
            longitud = data.longitud;

            console.log("Respuesta JSON:", data);
            console.log("Latitud:", latitud);
            console.log("Longitud:", longitud);
          } catch (error) {
            console.error("Error al procesar la respuesta JSON:", error);
          }
        } else {
          const text = await response.text();
          console.log("Respuesta no válida:", text);
        }
      } catch (error) {
        console.error("Error", error);
      }
    } else {
      console.log("Error:");
    }
  }

  onMount(() => {
    boletoId = boletoStore.getEventId();
    console.log("Valor actualizado de boletoId:", boletoId);

    obtenerCordenadas(boletoId).then(() => {
      mapLoaded = true;
    });
  });
</script>

<main>
  <Navbar />
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <h1 class="text-center mt-2">Aquí se encuentra el boleto</h1>

      {#if mapLoaded}
        <GoogleMapsAdmi {latitud} {longitud} />
      {:else}
        <p class="text-center">Esperando la carga de datos...</p>
      {/if}
    </div>
    <div class="col-md-2"></div>
  </div>
</main>
