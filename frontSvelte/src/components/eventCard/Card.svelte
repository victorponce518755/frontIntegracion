<script>
  import { Router, Link, Route } from "svelte-routing";
  import { navigate } from "svelte-routing/src/history";

  import img from "../eventCard/assets/concierto.jpg";

  export let ev;
</script>

<main>
  <div class="card" style="width: 15rem;">
    <img class="card-img-top" src={img} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{ev.nombre}</h5>
      <p class="card-text">
        Fecha: {ev.fecha}
        <br />
        Hora: {ev.hora}
        <br />
        Lugares Disponibles: {ev.cantidadBoletosNormales +
          ev.cantidadBoletosVip}
      </p>
      <Link to={`detalle/${ev.idEvento}`} class="btn btn-primary"
        >Compra Ya</Link
      >
    </div>
  </div>
</main>
