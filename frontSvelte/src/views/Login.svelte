<script>
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";
  import { loginURL } from "../App.svelte";
  import { navigate } from "svelte-routing/src/history";

  let username = "";
  let password = "";
  let url = `${loginURL}/users/login}`;

  // funcion para hacer el fetch del login

  async function iniciarSesion() {
    const datosInicioSesion = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosInicioSesion),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user_id", data.user_id);
        localStorage.setItem("username", data.nombre);
        localStorage.setItem("is_admin", data.admin);

        navigate("/", { replace: true });
        console.log("Inicio de sesión exitoso:", data);
      } else {
        // Manejo de errores si el inicio de sesión falla
        console.log("Inicio de sesión fallido");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  }
</script>

<Navbar />

<main class="container">
  <div class="col text-center">
    <h1 class="center mt-3">Inicia Sesión</h1>
  </div>

  <div class="container">
    <div class="row">
      <form class="container mt-5">
        <!-- Email input -->
        <div class="row">
          <div class="col-md-3" />
          <div class="form-outline mb-4 col-md-6">
            <input
              type="email"
              id="form2Example1"
              class="form-control bind:value={username}"
            />
            <label class="form-label" for="form2Example1">Email address</label>
          </div>
          <div class="col-md-3" />
        </div>

        <!-- Password input -->
        <div class="row">
          <div class="col-md-3" />
          <div class="form-outline mb-4 col-md-6">
            <input
              type="password"
              id="form2Example2"
              class="form-control bind:value={password}"
            />
            <label class="form-label" for="form2Example2">Password</label>
          </div>
          <div class="col-md-3" />
        </div>

        <div class="row">
          <div class="col-md-5" />
          <button type="submit" class="btn btn-primary mb-4 col-md-2"
            >Sign in</button
          >
          <div class="col-md-5" />
        </div>

        <!-- Register buttons -->
        <div class="text-center mt-1">
          <p>Not a member? <a href="#!">Register</a></p>
        </div>
      </form>
    </div>
  </div>
</main>
