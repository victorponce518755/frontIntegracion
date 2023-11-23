<script>
  import { Router, Link, Route } from "svelte-routing";
  import { navigate } from "svelte-routing/src/history";
  import img from "../eventCard/assets/concierto.jpg";
  import { eventStore } from "../../stores/eventStore";

  export let ev;

  const handleClick = () => {
    eventStore.setEventId(ev.idEvento);
    navigate(`/detalle`);
  };
</script>

<main>
  <div class="card" style="width: 15rem;">
    <img class="card-img-top" src={img} />
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
      <button on:click={handleClick} class="btn btn-outline-primary"
        >Ver Detalles</button
      >
    </div>
  </div>
</main>
