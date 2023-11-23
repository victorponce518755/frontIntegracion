<script>
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "./components/Navbar.svelte";
  import Home from "./views/Home.svelte";
  //import About from "./views/About.svelte";
  import Login from "./views/Login.svelte";
  import Perfil from "./views/Perfil.svelte";
  import Detalles from "./views/Detalles.svelte";

  export const loginURL = "http://34.42.187.190:5000/";
  export const eventoURL = "http://34.42.187.190:5000/";
</script>

<main>
  <Router>
    <Route path="/">
      <Home {eventoURL} />
    </Route>
    <Route path="/about">
      <h1>About</h1>
    </Route>
    <Route path="/login">
      <Login {loginURL} />
    </Route>
    <Route path="/perfil">
      <Perfil />
    </Route>
    <Route path="/detalle">
      <Detalles {eventoURL} />
    </Route>
  </Router>
</main>

<style>
</style>
