import axios from "axios";
import { ref } from "vue";

export const useGetData = () => {
  const data = ref(null);
  const loading = ref(true);
  const error = ref();

  const calculateStatColor = (statName) => {
    switch (statName) {
      case "hp":
        return "bg-success";
      case "attack":
        return "bg-danger opacity-50";
      case "defense":
        return "bg-warning opacity-50";
      case "special-attack":
        return "bg-danger";
      case "special-defense":
        return "bg-warning  ";
      default:
        return "bg-info";
    }
  };

  const calculateStatPercentage = (baseStat) => {
    // porcentaje de la barra de progreso
    return (baseStat / 255) * 100;
  };

  const getData = async (url) => {
    loading.value = true;
    try {
      const response = await axios.get(url);
      data.value = response.data;
    } catch (e) {
      error.value = "Error del servidor";
    } finally {
      loading.value = false;
    }
  };

  return {
    getData,
    data,
    loading,
    error,
    calculateStatColor,
    calculateStatPercentage,
  };
};
