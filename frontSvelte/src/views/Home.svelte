<script>
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";
  import Cards from "../components/eventCard/Cards.svelte";

  export let eventoURL;

  let user_id = localStorage.getItem("user_id");

  let username = localStorage.getItem("username");
</script>

<Navbar />

<main class="container">
  <div class="row">
    <div class="col-md-3" />
    <div class="col-md-6">
      {#if user_id}
        <h1 class="text-center">Bienvenido/a {username}</h1>
      {:else}
        <h1 class="text-center">Bienvenido</h1>
      {/if}
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
