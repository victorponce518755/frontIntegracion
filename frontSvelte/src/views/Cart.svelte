<script>
  // para el diseño de la página se utilizo de referencia diseño de
  // https://mdbootstrap.com/docs/standard/extended/shopping-carts/

  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";
  import CartCard from "../components/cartComponent/cartCard.svelte";

  import { cartStore } from "../stores/cartStore";
  import { priceStore } from "../stores/priceStore";
  import { onMount } from "svelte";

  export let generalURL;
  let url = `${generalURL}boletos/boleto`;
  console.log(url);

  let listaEventos = [];

  onMount(async () => {
    listaEventos = cartStore.getEventIds();
    if (listaEventos.length > 0) {
      console.log("Lista de eventos: ", listaEventos);
    }
  });

  const borrarCarrito = () => {
    cartStore.resetStore();
    priceStore.resetStore();
    alert("Carrito borrado");
    location.reload();
  };

  let total = 0;

  const unsubscribe = priceStore.subscribe((prices) => {
    total = priceStore.getTotalPrice();
  });

  //APARTIR DE AQUI EMPIEZA TODA LA LOGICA PARA COMPRAR Y GENERAR EL BOLETO/////

  const generarAsientoAleatorio = () => {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "1234567890";
    const letraAleatoria = letras.charAt(
      Math.floor(Math.random() * letras.length)
    );
    const numeroAleatorio = numeros.charAt(
      Math.floor(Math.random() * numeros.length)
    );
    return `${letraAleatoria}${numeroAleatorio}`;
  };

  const obtenerTipoAleatorio = () => {
    const tipos = ["normal", "vip"];
    const indiceAleatorio = Math.floor(Math.random() * tipos.length);
    return tipos[indiceAleatorio];
  };

  //FETCH PARA GENERAR EL BOLETO##############################################
  const pagar = async () => {
    const listaEventos = cartStore.getEventIds();

    if (listaEventos.length === 0) {
      alert("No hay eventos en el carrito");
      return;
    }

    try {
      for (const evento of listaEventos) {
        // Generar valores aleatorios para el boleto
        const asiento = generarAsientoAleatorio();
        const tipoAsiento = obtenerTipoAleatorio();
        const precio = priceStore.getRandomPrice();
        const idUsuario = localStorage.getItem("user_id"); // Reemplaza con el ID del usuario correspondiente
        const requestBody = {
          idEvento: evento,
          idUsuario,
          asiento,
          tipoAsiento,
          precio,
        };

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error("Error al crear el boleto");
        }

        const data = await response.json();
        console.log("Boleto creado:", data);

        // Eliminar el evento del carrito después de crear el boleto
        cartStore.remove(evento);
      }

      alert("Boletos comprados con éxito");
      location.reload();
    } catch (error) {
      console.error("Error al pagar:", error.message);
      alert("Ocurrió un error al realizar el pago");
    }
  };

  //TERMINA EL FETCH PARA GENERAR EL BOLETO##############################################

  //AQUI TERMINA TODA LA LOGICA PARA COMPRAR Y GENERAR EL BOLETO/////
</script>

<Navbar />
<main class="container">
  <section class="h-100 mt-5" style="background-color: #eee;">
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
                <CartCard eventId={evento} {generalURL} />
              {/each}
            {/if}
          </div>

          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-4">
                  <button type="button" class="btn btn-warning btn-block btn-lg"
                    >Pagar</button
                  >
                  <button
                    on:click={borrarCarrito}
                    class="btn btn-danger btn-block btn-lg"
                    >Borrar Carrito</button
                  >
                </div>
                <div class="col-md-4"></div>
                <div class="col-md-4"><h1>Total: ${total}</h1></div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
</style>
