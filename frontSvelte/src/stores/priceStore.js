import { writable } from "svelte/store";

const createPriceStore = () => {
  const { subscribe, update } = writable([]);

  const setPrice = (newPrice) => {
    update((prices) => {
      const updatedPrices = [...prices, newPrice];
      console.log("Precios actualizados:", updatedPrices);
      return updatedPrices;
    });
  };

  const getTotalPrice = () => {
    let total = 0;
    subscribe((prices) => {
      total = prices.reduce((acc, curr) => acc + curr, 0);
    })();
    return total;
  };

  return {
    subscribe,
    setPrice,
    getTotalPrice,
  };
};

export const priceStore = createPriceStore();
