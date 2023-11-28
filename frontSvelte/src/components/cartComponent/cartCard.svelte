<script>
  import { Router, Link, Route } from "svelte-routing";
  import { onMount } from "svelte";
  import { priceStore } from "../../stores/priceStore";

  import img from "../eventCard/assets/concierto.jpg";

  //obtento el id del evento seleccionado que viene del cart
  export let eventId;

  //guardo la info del evento seleccionado del resultado de la consulta
  let eventos;

  export let generalURL;
  let url = `${generalURL}eventos/evento/${eventId}`;
  console.log(url);

  //funcion para generar un precio random puede ser 500 ,750 o 1000
  let precio;
  const generarPrecioRandom = () => {
    let opcion = Math.floor(Math.random() * 3) + 1;
    if (opcion == 1) {
      precio = 500;
    } else if (opcion == 2) {
      precio = 750;
    } else {
      precio = 1000;
    }
    priceStore.setPrice(precio);
    return precio;
  };

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
          eventos = data;

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
    generarPrecioRandom();
    obtenerInfoEventos();
  });
</script>

<main>
  <div class="card rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="row d-flex justify-content-between align-items-center">
        <div class="col-md-2 col-lg-2 col-xl-2">
          <img src={img} class="img-fluid rounded-3" alt="Cotton T-shirt" />
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
          <p class="lead fw-normal mb-2">{eventos?.nombre}</p>
          <p>
            <span class="text-muted">Fecha: {eventos?.fecha} </span>
            <br />
            <span class="text-muted">Hora: {eventos?.hora}</span>
          </p>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
          <input
            id="form1"
            min="0"
            name="quantity"
            type="number"
            class="form-control form-control-sm"
          />
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h5 class="mb-0">Precio: ${precio}</h5>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a
          >
        </div>
      </div>
    </div>
  </div>
</main>
