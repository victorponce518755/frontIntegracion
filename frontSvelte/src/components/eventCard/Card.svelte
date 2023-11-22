<script>
  import { Router, Link, Route } from "svelte-routing";

  import img from "../eventCard/assets/concierto.jpg";

  export let evento;

  console.log(evento);

  let data;
</script>

<main>
  <div class="card" style="width: 15rem;">
    <img class="card-img-top" src={img} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{evento.nombre}</h5>
      <p class="card-text">
        Fecha: {evento.fecha}
        <br />
        Hora: {evento.hora}
        <br />
        Lugares Disponibles: {evento.cantidadBoletosNormales +
          evento.cantidadBoletosVip}
      </p>
      <a href="#" class="btn btn-primary">Compra Ya</a>
    </div>
  </div>
</main>
