<script>
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";
  //import { loginURL } from "./App.svelte";
  import { navigate } from "svelte-routing/src/history";

  let username = "";
  let password = "";
  export let loginURL;
  console.log(loginURL);
  let url = `${loginURL}users/login`;
  console.log(url);

  // funcion para hacer el fetch del login

  async function iniciarSesion() {
    if (username.trim() !== "" && password.trim() !== "") {
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

        if (response.status === 405) {
          console.log("Error: Método no permitido (405)");
        } else if (response.ok) {
          try {
            const data = await response.json();
            console.log("Respuesta JSON:", data);
            localStorage.setItem("user_id", data.user_id);
            localStorage.setItem("username", data.nombre);
            localStorage.setItem("is_admin", data.admin);

            navigate("/", { replace: true });
            console.log("Inicio de sesión exitoso:", data);
          } catch (error) {
            console.error("Error al procesar la respuesta JSON:", error);
          }
        } else {
          const text = await response.text();
          console.log("Respuesta no válida:", text);
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
      }
    } else {
      console.log("Error: Campos vacíos");
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
      <form class="container mt-5" on:submit|preventDefault={iniciarSesion}>
        <!-- Email input -->
        <div class="row">
          <div class="col-md-3" />
          <div class="form-outline mb-4 col-md-6">
            <label class="form-label" for="form2Example1">Email address</label>
            <input
              type="email"
              id="form2Example1"
              class="form-control"
              bind:value={username}
            />
          </div>
          <div class="col-md-3" />
        </div>

        <!-- Password input -->
        <div class="row">
          <div class="col-md-3" />
          <div class="form-outline mb-4 col-md-6">
            <label class="form-label" for="form2Example2">Password</label>
            <input
              type="password"
              id="form2Example2"
              class="form-control"
              bind:value={password}
            />
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
