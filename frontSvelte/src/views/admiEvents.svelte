<script>
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";
  import Eventos from "../components/inserción/Eventos.svelte";
  import Sedes from "../components/inserción/Sedes.svelte";
  import Artistas from "../components/inserción/Artistas.svelte";
  import InfoArtistas from "../components/inserción/InfoArtistas.svelte";
  import InfoSedes from "../components/inserción/InfoSedes.svelte";
  import InfoEventos from "../components/inserción/InfoEventos.svelte";

  export let generalURL;
</script>

<main>
  <Navbar />
  <div class="container text-center mt-4">
    <div class="row text-center">
      <div class="col-md-6 border border-2 border-dark">
        <Eventos {generalURL} />
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col">
            <InfoArtistas {generalURL} />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <InfoSedes {generalURL} />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <InfoEventos {generalURL} />
          </div>
        </div>
        <div>
          <div class="row text-center">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <!-- <Sedes /> -->
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
        <div>
          <div class="row text-center">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <!-- <Artistas /> -->
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
