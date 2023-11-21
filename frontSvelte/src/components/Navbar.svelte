<script>
  import { Link } from "svelte-routing";

  import { navigate } from "svelte-routing/src/history";

  const cerrarSesion = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  let userType = localStorage.getItem("is_admin");
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  {#if userType == 1}
    <Link class="navbar-brand" to="/">Conciertos APP</Link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <!-- <li class="nav-item">
        <Link class="nav-link" to="/about">About</Link>
      </li> -->
        <li class="nav-item">
          <Link class="nav-link" to="/perfil">Perfil</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login" on:click={cerrarSesion}
            >Cerrar Sesión Admi</Link
          >
        </li>
      </ul>
    </div>
  {:else if userType == 0}
    <!-- else content here --><Link class="navbar-brand" to="/"
      >Conciertos APP</Link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <!-- <li class="nav-item">
      <Link class="nav-link" to="/about">About</Link>
    </li> -->
        <li class="nav-item">
          <Link class="nav-link" to="/perfil">Perfil</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login" on:click={cerrarSesion}
            >Cerrar Sesion</Link
          >
        </li>
      </ul>
    </div>
  {:else}
    <Link class="navbar-brand" to="/">Conciertos APP</Link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <!-- <li class="nav-item">
        <Link class="nav-link" to="/about">About</Link>
      </li> -->
        <!-- <li class="nav-item">
          <Link class="nav-link" to="/perfil">Perfil</Link>
        </li> -->
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    </div>
  {/if}
</nav>
