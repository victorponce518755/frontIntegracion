<script>
  import { Router, Link, Route } from "svelte-routing";
  import { bind } from "svelte/internal";

  let idArtista = 0;
  let nombreEvento = "";
  let descripcion = "";
  let idSede = 0;
  let fecha = "";
  let hora = "";
  let cantidadBoletos = 0;
  let cantidadBoletosVip = 0;
</script>

<main>
  <h3 class="mt-4">Insertar Eventos</h3>
  <p>Porfavor ingresa los datos de tu evento</p>
  <div class="container mt-4">
    <form>
      <div class="form-group">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Nombre del Evento:</label>
        <input type="text" class="form-control" bind:value={nombreEvento} />
      </div>
      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <textarea
          class="form-control"
          id="descripcion"
          rows="3"
          bind:value={descripcion}
        ></textarea>
      </div>
      <div class="form-group">
        <label for="fecha">Fecha:</label>
        <input type="date" class="form-control" id="fecha" bind:value={fecha} />
      </div>
      <div class="form-group">
        <label for="hora">Hora:</label>
        <input type="time" class="form-control" id="hora" bind:value={hora} />
      </div>
      <div class="form-group">
        <label for="idArtista">ID Artista:</label>
        <input
          type="number"
          class="form-control"
          id="idArtista"
          bind:value={idArtista}
        />
      </div>

      <div class="form-group">
        <label for="idSede">ID Sede:</label>
        <input
          type="number"
          class="form-control"
          id="idSede"
          bind:value={idSede}
        />
      </div>

      <div class="form-group">
        <label for="cantidadBoletos">Cantidad de Boletos:</label>
        <input
          type="number"
          class="form-control"
          bind:value={cantidadBoletos}
        />
      </div>
      <div class="form-group">
        <label for="cantidadBoletosVip">Cantidad de Boletos VIP:</label>
        <input
          type="number"
          class="form-control"
          bind:value={cantidadBoletosVip}
        />
      </div>
      <button type="submit" class="btn btn-primary mt-3 mb-2">Enviar</button>
    </form>
  </div>
</main>
