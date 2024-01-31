<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const backToHome = () => {
  router.push("/");
};
</script>

<template>
  <h1>404</h1>
  <button class="btn btn-outline-dark" @click="backToHome()">
    Back to home
  </button>
</template>
