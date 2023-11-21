<script>
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "./components/Navbar.svelte";
  import Home from "./views/Home.svelte";
  //import About from "./views/About.svelte";
  //import Login from "./views/Login.svelte";
  import Perfil from "./views/Perfil.svelte";
</script>

<main>
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
      <Perfil />
    </Route>
  </Router>
</main>

<style>
</style>
