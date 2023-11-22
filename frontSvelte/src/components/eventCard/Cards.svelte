<script>
  import { Router, Link, Route } from "svelte-routing";
  import Card from "./card.svelte";
  import { onMount } from "svelte";

  export let eventoURL;
  console.log("eventoURL", eventoURL);
  let url = `${eventoURL}eventos/evento`;
  console.log(url);

  let eventos = [];

  async function obtenerInfoEventos() {
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
          eventos = Array.isArray(data) ? data : [];
          console.log("soy eventos", eventos);
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
    <h1 class="text-center">Eventos</h1>
    <div class="row">
      {#each eventos as evento, index}
        {#if index % 2 === 0}
          <div class="row">
            {#each [eventos[index], eventos[index + 1]] as ev}
              {#if ev}
                <div
                  class="col-md-6 mb-4 d-flex justify-content-center"
                  key={ev.idEvento}
                >
                  <Card {ev} />
                </div>
              {/if}
            {/each}
          </div>
        {/if}
      {/each}
    </div>
  </div>
</main>

<!-- 
<main>
    <div class="container">
      <div class="row">
        <div class="col-md-3" />
        <div class="col-md-6">
          <h1 class="text-center">Eventos</h1>
        </div>
        <div class="col-md-3" />
      </div>
      {#each eventos as evento (evento.idEvento)}
        {#if evento.idEvento % 3 === 1}
          <!-- Inicia una nueva fila después de cada tercer evento -->
<!-- <div class="row">
            {#each eventos.slice(evento.idEvento - 1, evento.idEvento + 2) as ev (ev.idEvento)}
              <div class="col-md-3 mb-4" key={ev.idEvento}>
                <Card {evento} />
              </div>
            {/each}
          </div>
        {/if}
      {/each}
    </div>
  </main>
   -->
