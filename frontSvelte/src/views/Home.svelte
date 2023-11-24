<script>
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";
  import Cards from "../components/eventCard/cards.svelte";

  export let eventoURL;
</script>

<Navbar />

<main class="container">
  <div class="row">
    <div class="col-md-3" />
    <div class="col-md-6">
      <h1 class="text-center">Bienvenido</h1>
    </div>
    <div class="col-md-3" />
  </div>

  <div class="row">
    <div class="col-md-3" />
    <div class="col-md-6 mt-3">
      <Cards {eventoURL} />
    </div>
    <div class="col-md-3" />
  </div>
</main>
