<script>
  import { Router, Link, Route } from "svelte-routing";

  import { onMount } from "svelte";

  export let generalURL;
  let url = `${generalURL}artistas/artista`;
  console.log(url);

  let artistas = [];

  async function obtenerInfoArtistas() {
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
          artistas = Array.isArray(data) ? data : [];
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
    obtenerInfoArtistas();
  });
</script>

<main>
  <div class="container mt-4">
    <h3>Id Artistas</h3>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <table class="table table-bordered">
          <thead class="bg-light">
            <tr>
              <th>ID</th>
              <th>Nombre Artista</th>
            </tr>
          </thead>
          <tbody>
            {#each artistas as artista}
              <tr>
                <td>{artista.idArtista}</td>
                <td>{artista.nombre}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</main>
