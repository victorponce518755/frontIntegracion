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

  //funcion que devuelve random un precio random de la lista de precios
  const getRandomPrice = () => {
    let randomPrice = 0;
    subscribe((prices) => {
      randomPrice = prices[Math.floor(Math.random() * prices.length)];
    })();
    console.log("Precio random:", randomPrice);
    return randomPrice;
  };

  return {
    subscribe,
    setPrice,
    set,
    getTotalPrice,
    resetStore,
    getRandomPrice,
  };
};

export const priceStore = createPriceStore();
