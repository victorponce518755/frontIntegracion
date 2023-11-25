<script>
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";

  import { cartStore } from "../stores/cartStore";

  const borrarCarrito = () => {
    cartStore.resetStore();
  };
</script>

<main>
  <Navbar />
  <h1>Soy el carro</h1>

  <button on:click={borrarCarrito}>Borrar Carrito</button>
</main>
