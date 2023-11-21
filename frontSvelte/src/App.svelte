<script>
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "./components/Navbar.svelte";
  import Home from "./views/Home.svelte";
  //import About from "./views/About.svelte";
  //import Login from "./views/Login.svelte";
  //import Perfil from "./views/Perfil.svelte";
</script>

<main class="container">
  <Router>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/about">
      <h1>About</h1>
    </Route>
    <Route path="/login">
      <h1>Login</h1>
    </Route>
    <Route path="/perfil">
      <h1>Perfil</h1>
    </Route>
  </Router>
</main>

<style>
</style>
