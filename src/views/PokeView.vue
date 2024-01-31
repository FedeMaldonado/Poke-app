<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";
import { useFavoritesStore } from "@/store/favorites";
const route = useRoute();
const router = useRouter();

const useFavorites = useFavoritesStore();
const { add, findPoke } = useFavorites;
const {
  data,
  getData,
  loading,
  error,
  calculateStatColor,
  calculateStatPercentage,
} = useGetData();

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
const back = () => {
  router.push("/pokemons");
};
</script>

<template>
  <div class="text-center justify-content-center mt-5">
    <p class="text-white" v-if="loading">Loading Information...</p>
    <p v-if="error" class="alert alert-danger mt-2">No existe el pokemon</p>
  </div>
  <div v-if="data" class="card d-flex mt-5 text-center bg-light opacity-70">
    <section>
      <img
        class="img-fluid mx-auto w-25 p-3 d-flex justify-content-center"
        :src="data.sprites?.front_default"
        alt=""
      />
    </section>

    <section class="card-body bg-light opacity-70 justify-content-center">
      <h5 class="card-title">{{ data.species?.name }}</h5>

      <!-- Stats -->
      <div
        v-for="(stat, index) in data.stats"
        :key="index"
        class="container text-center align-items-center"
      >
        <div class="row">
          <div class="col">
            {{ stat.stat.name }}
          </div>
          <div class="col">
            {{ stat.base_stat }}
          </div>
          <!-- Barra de progreso -->
          <div
            class="progress"
            role="progressbar"
            :aria-label="`Stat ${stat.stat.name}`"
            :aria-valuenow="stat.base_stat"
            aria-valuemin="0"
            aria-valuemax="255"
          >
            <div
              class="progress-bar"
              :style="{ width: calculateStatPercentage(stat.base_stat) + '%' }"
              :class="calculateStatColor(stat.stat.name)"
            ></div>
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <section class="d-flex justify-content-center mt-4">
        <button
          :disabled="findPoke(data?.name)"
          class="btn btn-primary me-md-2"
          @click="add(data)"
        >
          Add to Favorites
        </button>
        <button class="btn btn-outline-dark" @click="back">Back</button>
      </section>
    </section>
  </div>
</template>
