<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar bg-danger">
    <div class="container">
      <RouterLink class="btn btn-outline-dark" to="/">Home</RouterLink>
      <RouterLink class="btn btn-outline-dark" to="/pokemons"
        >Pokemons</RouterLink
      >
      <RouterLink class="btn btn-outline-dark" to="/favorites"
        >Favorites</RouterLink
      >
    </div>
  </nav>

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
body {
  color: aliceblue;
}
nav {
  margin-bottom: 15px;
}

@media screen and (max-width: 287px) {
  nav,
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
  }
}
</style>
