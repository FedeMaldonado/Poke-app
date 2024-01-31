<script setup>
import { storeToRefs } from "pinia";
import { useFavoritesStore } from "@/store/favorites";
import { RouterLink } from "vue-router";

const useFavorites = useFavoritesStore();
const { favorites } = storeToRefs(useFavorites);
const { remove } = useFavorites;
</script>
<template>
  <article>
    <h1 class="text-center m-3">Favorites Pokemons</h1>
    <p v-if="favorites.length === 0" class="text-center">No favorites</p>
    <ul class="list-group" v-else>
      <li
        class="list-group-item bg-light opacity-70 text-dark d-flex justify-content-between align-items-center"
        v-for="poke in favorites"
        :key="poke.id"
      >
        <section class="image">
          <img class="mx-auto" :src="poke.sprites?.front_default" alt="" />
        </section>
        {{ poke.name.toUpperCase() }}

        <!-- Buttons -->
        <section class="buttons">
          <RouterLink
            class="name btn btn-sm btn-primary me-2"
            :to="`/pokemons/${poke?.name}`"
            >More information</RouterLink
          >
          <button class="btn btn-sm btn-danger me-2" @click="remove(poke.id)">
            Delete
          </button>
        </section>
      </li>
    </ul>
  </article>
</template>
<style>
body {
  background-color: #242424;
}

@media screen and (max-width: 520px) {
  article,
  image,
  ul,
  .buttons,
  li {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
  }
}
</style>
