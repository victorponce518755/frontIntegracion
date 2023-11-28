<script>
  import { Router, Link, Route } from "svelte-routing";
  import { onMount } from "svelte";
  import img from "../eventCard/assets/concierto.jpg";

  export let evento;

  let eventInfo = null;
  console.log(eventInfo);

  //No sabemos por que aqui paso el valor del evento como el del boleto y viceversa
  export let generalURL;
  let url = `${generalURL}eventos/evento/${evento.idBoleto}`;
  console.log(url);

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
          eventInfo = data;
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
    obtenerInfoEventos();
  });
</script>

<main>
  <div class="card rounded-3 mb-4 mt-2">
    <div class="card-body p-4">
      <div class="row d-flex justify-content-between align-items-center">
        <div class="col-md-2 col-lg-2 col-xl-2">
          <img src={img} class="img-fluid rounded-2" alt="Cotton T-shirt" />
        </div>
        <div class="col-md-4">
          <p class="lead fw-normal mb-2">{eventInfo?.nombre}</p>
          <p>
            <span class="text-muted">Fecha: {eventInfo?.fecha} </span>
            <br />
            <span class="text-muted">Hora: {eventInfo?.hora} </span>
            <br />
            <span class="text-muted"
              >Descripcion: {eventInfo?.descripcion}
            </span>
          </p>
        </div>

        <div class="col-md-3 col-xl-2 offset-lg-1">
          <button class="btn btn-success">Ver Mapa id: {evento.idEvento}</button
          >
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a
          >
        </div>
      </div>
    </div>
  </div>
</main>
