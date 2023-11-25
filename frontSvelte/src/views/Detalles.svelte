<script>
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";
  import Cards from "../components/eventCard/cards.svelte";
  import { getContext, onMount } from "svelte";
  import { eventStore } from "../stores/eventStore";
  import { cartStore } from "../stores/cartStore";
  import img from "../components/eventCard/assets/concierto.jpg";

  //Se tomo como base para el detalle del producto el siguiente link:
  //https://bbbootstrap.com/snippets/bootstrap-ecommerce-single-product-page-size-attribute-59223596

  //es el url que viene desde App.svelte
  export let eventoURL;

  //variables para obtener los datos del evento desde el store
  let evento = null;

  //variable para obtener el id del evento desde el store
  let valorEventStore = null;

  // variable para obtener la cantidad de boletos que se van a comprar
  let cantidadBoletos = 0;

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
        valorEventStore = value; //almaceno su valor para usarlo en la funcion de agregar al carrito
        obtenerInfoEventos(value);
      }
    });
    return unsubscribe;
  });

  //Funcion para agregar a la store de carritos, el id del evento y la cantidad de boletos que se van a comprar

  function agregarAlCarrito() {
    if (cantidadBoletos > 0 && evento) {
      console.log("evento", valorEventStore, "cantidad", cantidadBoletos);

      cartStore.add(valorEventStore, cantidadBoletos);
    } else {
      alert("No se puede agregar al carrito, cantidad de boletos no válida");
    }
  }
</script>

<main>
  <Navbar />
  <div class="container mt-5 mb-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <div class="card">
          <div class="row">
            <div class="col-md-6">
              <div class="images p-3">
                <div class="text-center p-4">
                  <img src={img} width="500" />
                </div>
                <div class="thumbnail text-center" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="product p-4">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center" />
                  <i class="fa fa-shopping-cart text-muted" />
                </div>
                <div class="mt-4 mb-3">
                  <span class="text-uppercase text-muted brand">Detalles</span>
                  <h5 class="text-uppercase">{evento?.nombre}</h5>
                  <div class="price d-flex flex-row align-items-center">
                    <span class="act-price">$20</span>
                  </div>
                </div>
                <p>
                  <strong> Descripcion: </strong>
                  {evento?.descripcion}
                </p>
                <p>
                  <strong>Cantidad de boletos:</strong
                  >{evento?.cantidadBoletosNormales}
                  <br />
                  <strong>Cantidad de boletos Vip:</strong>
                  {evento?.cantidadBoletosVip}
                  <br />

                  <strong>Fecha:</strong>
                  {evento?.fecha}
                  <br />
                  <strong>Hora:</strong>
                  {evento?.hora}
                </p>
                <div class="sizes mt-3">
                  <h6 class="text-uppercase">Cantidad</h6>
                  <input
                    type="number"
                    class="form-control-sm"
                    min="0"
                    bind:value={cantidadBoletos}
                  />
                </div>
                <div class="cart mt-4 align-items-center">
                  <button
                    class="btn btn-danger text-uppercase mr-2 px-4"
                    on:click={agregarAlCarrito}>Agregar al carrito</button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
