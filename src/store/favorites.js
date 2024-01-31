import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref([]); //referencia reactiva que almacena los pokemons favoritos que agregue.

  //Con parse convierto el formato que venia en JSON de texto, a un array nuevamente.
  if (localStorage.getItem("favorites")) {
    favorites.value = JSON.parse(localStorage.getItem("favorites"));
  }

  //Agrego un pokemon al array favorites.
  const add = (poke) => {
    favorites.value.push(poke);
    localStorage.setItem("favorites", JSON.stringify(favorites.value)); //Guardo los datos en el localStorage, utilizo (JSON.stringify) para convertir el array en texto porque localStorage no guarda arrays.
  };

  //Utilizo el filter para filtrar los id del array favorites y si el id es distinto puedo eliminar el pokemon.
  const remove = (id) => {
    favorites.value = favorites.value.filter((item) => item.id != id);
    localStorage.setItem("favorites", JSON.stringify(favorites.value)); //Guardo los datos en el localStorage, utilizo (JSON.stringify) para convertir el array en texto porque localStorage no guarda arrays.
  };

  //Con el find verifico si el pokemon existe dentro del array favorites, si existe bloqueo el boton, si no existe puedo agregar el pokemon a la lista.
  const findPoke = (name) => favorites.value.find((item) => item.name === name);

  //Retorno las variables reactivas y metodos que voy a utilizar en otros componentes.
  return {
    favorites,
    add,
    remove,
    findPoke,
  };
});
