<script>
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";

  let username = localStorage.getItem("username");
  import BoletosCard from "../components/misBoletos/boletosCard.svelte";
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
      <h1 class="text-center">Tus proximos eventos</h1>
    </div>
    <div class="col-md-3" />
  </div>

  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6"><BoletosCard /></div>
    <div class="col-md-3"></div>
  </div>
</main>
