<script>
  import { Router, Link, Route } from "svelte-routing";
  import Card from "./card.svelte";
  import { onMount } from "svelte";

  async function obtenerInfoEventos() {
    export let eventoURL;
    console.log("eventoURL", eventoURL);
    let url = `${eventoURL}eventos/evento`;
    console.log(url);
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 405) {
        console.log("Error: Método no permitido (405)");
      } else if (response.ok) {
        try {
          const data = await response.json();
          console.log("Respuesta JSON:", data);

          console.log("Datos obtenidos exitosamente", data);
        } catch (error) {
          console.error("Error al procesar la respuesta JSON:", error);
        }
      } else {
        const text = await response.text();
        console.log("Respuesta no válida:", text);
      }
    } catch (error) {
      console.error("Error ", error);
    }
  }

  onMount(() => {
    obtenerInfoEventos();
  });
</script>

<main>
  <div class="container">
    <div class="row">
      <div class="col-md-3" />
      <div class="col-md-6">
        <h1 class="text-center">Eventos</h1>
      </div>
      <div class="col-md-3" />
    </div>
    <div class="row">
      <div class="col-md-3" />
      <div class="col-md-6">
        <Card />
      </div>
      <div class="col-md-3" />
    </div>
  </div>
</main>
