<script>
  // para el diseño de la página se utilizo de referencia diseño de
  // https://mdbootstrap.com/docs/standard/extended/shopping-carts/

  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";
  import CartCard from "../components/cartComponent/cartCard.svelte";

  import { cartStore } from "../stores/cartStore";
  import { onMount } from "svelte";

  export let generalURL;

  let listaEventos = [];

  onMount(async () => {
    listaEventos = cartStore.getEventIds();
    if (listaEventos.length > 0) {
      console.log("Lista de eventos: ", listaEventos);
    }
  });

  const borrarCarrito = () => {
    cartStore.resetStore();
    location.reload();
  };
</script>

<Navbar />
<main class="container">
  <section class="h-100" style="background-color: #eee;">
    <div class="container h-100 py-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-10">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="fw-normal mb-0 text-black">Carrito de Compras</h3>
          </div>
          <div>
            {#if listaEventos.length === 0}
              <div class="alert alert-warning" role="alert">
                No hay eventos en el carrito
              </div>
            {:else}
              {#each listaEventos as evento}
                <CartCard {evento} {generalURL} />
              {/each}
            {/if}
          </div>

          <div class="card">
            <div class="card-body">
              <button type="button" class="btn btn-warning btn-block btn-lg"
                >Pagar</button
              >
              <button
                on:click={borrarCarrito}
                class="btn btn-danger btn-block btn-lg">Borrar Carrito</button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--   <div class="row">
    <div class="col-md-3" />
    <div class="col-md-6">
      <h1 class="text-center">Carrito</h1>
    </div>
    <div class="col-md-3" />
  </div>

  <div class="row">
    <div class="col-md-3" />
    <div class="col-md-6">
      <h1 class="text-center">Contenido</h1>
    </div>
    <div class="col-md-3" />
  </div>

  <div class="row">
    <div class="col-md-3" />
    <div class="col-md-6 text-center">

    </div>
    <div class="col-md-3" />
  </div> -->
</main>

<style>
</style>
