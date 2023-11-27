<script>
  import { Router, Link, Route } from "svelte-routing";

  import { navigate } from "svelte-routing/src/history";

  let idArtista = 0;
  let nombreEvento = "";
  let descripcion = "";
  let idSede = 0;
  let fecha = "";
  let hora = "";
  let cantidadBoletosNormales = 0;
  let cantidadBoletosVip = 0;

  export let generalURL;
  console.log(generalURL);
  let url = `${generalURL}eventos/evento`;
  console.log(url);

  async function insertarEvento() {
    if (
      idArtista !== 0 &&
      nombreEvento !== "" &&
      descripcion !== "" &&
      idSede !== 0 &&
      fecha !== "" &&
      hora !== "" &&
      cantidadBoletosNormales !== 0 &&
      cantidadBoletosVip !== 0
    ) {
      const datosEvento = {
        idArtista: idArtista,
        nombre: nombreEvento,
        descripcion: descripcion,
        idSede: idSede,
        fecha: fecha,
        hora: hora,
        cantidadBoletosNormales: cantidadBoletosNormales,
        cantidadBoletosVip: cantidadBoletosVip,
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datosEvento),
        });

        if (response.status === 405) {
          console.log("Error: Método no permitido (405)");
        } else if (response.ok) {
          try {
            const data = await response.json();
            console.log("Respuesta JSON:", data);
            idArtista = 0;
            nombreEvento = "";
            descripcion = "";
            idSede = 0;
            fecha = "";
            hora = "";
            cantidadBoletosNormales = 0;
            cantidadBoletosVip = 0;
            location.reload();
          } catch (error) {
            console.error("Error al procesar la respuesta JSON:", error);
          }
        } else {
          const text = await response.text();
          console.log("Respuesta no válida:", text);
        }
      } catch (error) {
        console.error("Error al agregar evento", error);
      }
    } else {
      console.log("Error: Campos vacíos");
    }
  }
</script>

<main class="border border-2 border-dark">
  <h3 class="mt-4">Insertar Eventos</h3>
  <p>Porfavor ingresa los datos de tu evento</p>
  <div class="container mt-4">
    <form on:submit|preventDefault={insertarEvento}>
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
          bind:value={cantidadBoletosNormales}
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
