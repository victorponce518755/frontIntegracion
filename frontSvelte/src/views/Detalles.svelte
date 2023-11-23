<script>
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";
  import Cards from "../components/eventCard/cards.svelte";
  import { getContext, onMount } from "svelte";
  import { eventStore } from "../stores/eventStore";

  //es el url que viene desde App.svelte
  export let eventoURL;

  //variables para obtener los datos del evento desde el store
  let evento = null;

  //funcion para obtener los datos del evento, con el id que viene desde el store
  async function obtenerInfoEventos(id) {
    let url = `${eventoURL}eventos/evento/${id}`;
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
          evento = data;
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

  //funcion para obtener el id del evento desde el store, cuando cambie y se inicialice el componente
  onMount(() => {
    const unsubscribe = eventStore.subscribe((value) => {
      if (value !== null) {
        obtenerInfoEventos(value);
      }
    });
    return unsubscribe;
  });
</script>

<main>
  <Navbar />
  <h1>Estas en detalle vacio</h1>
</main>
