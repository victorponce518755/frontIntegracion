<script>
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";
  import { onMount } from "svelte";

  let username = localStorage.getItem("username");
  import BoletosCardAdmi from "../components/misBoletos/boletosCardAdmi.svelte";

  let idUsuario = localStorage.getItem("user_id");
  export let generalURL;
  let url = `${generalURL}boletos/boleto/user/${idUsuario}`;
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

<Navbar />
<main class="container">
  <div class="row">
    <div class="col-md-3" />
    <div class="col-md-6">
      <h1 class="text-center">Estas en tu perfil {username}</h1>
    </div>
    <div class="col-md-3" />
  </div>

  <div class="row mt-2">
    <div class="col-md-3" />
    <div class="col-md-6">
      <h1 class="text-center">Los proximos eventos son:</h1>
    </div>
    <div class="col-md-3" />
  </div>

  <!--Para cada evento genera un Boletos Card y le pasas su informacion a la carta -->
  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
      {#each eventos as evento}
        <BoletosCardAdmi {evento} {generalURL} />
      {/each}
    </div>
    <div class="col-md-3"></div>
  </div>
</main>
