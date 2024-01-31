<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData";

const { data, getData, error } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
  <article class="list-group">
    <section>
      <h1 class="text-center">Pokemons</h1>
      <p v-if="error" class="alert alert-danger mt-2">{{ error }}</p>
      <button
        :disabled="!data?.previous"
        class="btn btn-danger me-2 m-2"
        @click="getData(data.previous)"
      >
        previous
      </button>
      <button
        :disabled="!data?.next"
        class="btn btn-primary me-2 m-2"
        @click="getData(data.next)"
      >
        Next
      </button>
    </section>
    <section v-if="data">
      <ul class="list-group">
        <li
          class="list-group-item list-group-item-action text-center"
          v-for="poke in data?.results"
        >
          <RouterLink
            class="link-iffset-2 link-underline link-underline-opacity-0"
            :to="`/pokemons/${poke.name}`"
            >{{ poke.name }}</RouterLink
          >
        </li>
      </ul>
    </section>
  </article>
</template>
