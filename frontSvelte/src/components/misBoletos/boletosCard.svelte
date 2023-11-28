<script>
  import { Router, Link, Route } from "svelte-routing";
  import { onMount } from "svelte";
  import img from "../eventCard/assets/concierto.jpg";

  export let eventoURL;
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
  <div class="card rounded-3 mb-4 mt-2">
    <div class="card-body p-4">
      <div class="row d-flex justify-content-between align-items-center">
        <div class="col-md-2 col-lg-2 col-xl-2">
          <img src={img} class="img-fluid rounded-2" alt="Cotton T-shirt" />
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
          <p class="lead fw-normal mb-2">Nombre</p>
          <p>
            <span class="text-muted">Fecha: </span>
            <br />
            <span class="text-muted">Hora: </span>
            <br />
            <span class="text-muted">Descripcion: </span>
          </p>
        </div>

        <div class="col-md-3 col-xl-2 offset-lg-1">
          <button class="btn btn-success">Ver Mapa</button>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a
          >
        </div>
      </div>
    </div>
  </div>
</main>
