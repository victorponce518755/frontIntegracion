<script>
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "./components/Navbar.svelte";
  import Home from "./views/Home.svelte";
  //import About from "./views/About.svelte";
  import Login from "./views/Login.svelte";
  import Perfil from "./views/Perfil.svelte";
  import Detalles from "./views/Detalles.svelte";
  import Cart from "./views/Cart.svelte";
  import AdmiEvents from "./views/admiEvents.svelte";
  import AdmiGraphics from "./views/admiGraphics.svelte";

  export const loginURL = "http://35.202.140.65:5000/";
  export const eventoURL = "http://35.202.140.65:5000/";
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
    <Route path="/cart">
      <Cart />
    </Route>
    <Route path="/admiEvents">
      <AdmiEvents />
    </Route>
    <Route path="/admiGraphics">
      <AdmiGraphics />
    </Route>
  </Router>
</main>

<style>
</style>
