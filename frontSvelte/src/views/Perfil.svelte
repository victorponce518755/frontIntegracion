<script>
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";

  let username = localStorage.getItem("username");
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
</main>
