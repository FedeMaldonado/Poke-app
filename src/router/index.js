import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/pokemons",
      name: "pokemons",
      component: () => import("../views/PokemonsView.vue"),
    },
    {
      path: "/pokemons/:name",
      name: "pokemon",
      component: () => import("../views/PokeView.vue"),
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("../views/FavoritesView.vue"),
    },

    //Si no existe la ruta, muestro un error 404
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
