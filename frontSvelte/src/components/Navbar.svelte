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
    <div
      class="collapse navbar-collapse d-flex justify-content-between align-items-center"
      id="navbarNav"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <Link class="nav-link" to="/">Eventos</Link>
        </li>
        <!-- <li class="nav-item">
          <Link class="nav-link" to="/perfil">Perfil</Link>
        </li> -->
        <li class="nav-item">
          <Link class="nav-link" to="/admiEvents">Administrar</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/admiGraphics">Gráficas</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login" on:click={cerrarSesion}
            >Cerrar Sesión</Link
          >
        </li>
      </ul>
      <div class="mr-5">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/cart">
              <i class="bi bi-cart" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  {:else if userType == 0}
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
    <div
      class="collapse navbar-collapse d-flex justify-content-between align-items-center"
      id="navbarNav"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <Link class="nav-link" to="/">Eventos</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/perfil">Perfil</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login" on:click={cerrarSesion}
            >Cerrar Sesión</Link
          >
        </li>
      </ul>
      <div class="mr-5">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/cart">
              <i class="bi bi-cart" />
            </Link>
          </li>
        </ul>
      </div>
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
    <div
      class="collapse navbar-collapse d-flex justify-content-between align-items-center"
      id="navbarNav"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/">Eventos</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">Iniciar Sesión</Link>
        </li>
      </ul>
    </div>
  {/if}
</nav>
