<script>
  import { Router, Link, Route } from "svelte-routing";

  import { onMount } from "svelte";

  export let generalURL;
  let url = `${generalURL}eventos/evento`;
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
    <h3>Id Eventos</h3>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <table class="table table-bordered">
          <thead class="bg-light">
            <tr>
              <th>ID</th>
              <th>Nombre Evento</th>
            </tr>
          </thead>
          <tbody>
            {#each eventos as evento}
              <tr>
                <td>{evento.idEvento}</td>
                <td>{evento.nombre}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</main>
