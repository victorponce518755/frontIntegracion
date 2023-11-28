import { writable } from "svelte/store";

const createPriceStore = () => {
  const { subscribe, update, set } = writable([]);

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

  const resetStore = () => {
    set([]);
    console.log("Precios reseteados");
  };

  return {
    subscribe,
    setPrice,
    set,
    getTotalPrice,
    resetStore,
  };
};

export const priceStore = createPriceStore();
