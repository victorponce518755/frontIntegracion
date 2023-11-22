<script>
  import { Router, Link, Route } from "svelte-routing";

  import img from "../eventCard/assets/concierto.jpg";

  let evento;
</script>

<main>
  <div class="card" style="width: 15rem;">
    <img class="card-img-top" src={img} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{evento.nombre}</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Compra Ya</a>
    </div>
  </div>
</main>
