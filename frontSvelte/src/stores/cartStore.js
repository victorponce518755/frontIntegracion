import { writable } from "svelte/store";

const createCarritoStore = () => {
  const { subscribe, set, update } = writable({
    eventIds: [],
    quantities: [],
  });

  const add = (eventId, quantity) => {
    update((carritos) => {
      const updatedEventIds = [...carritos.eventIds, eventId];
      const updatedQuantities = [...carritos.quantities, quantity];
      console.log("EventIds actualizados:", updatedEventIds);
      console.log("Cantidades actualizadas:", updatedQuantities);
      return { eventIds: updatedEventIds, quantities: updatedQuantities };
    });
  };

  const remove = (eventId) => {
    update((carritos) => {
      const index = carritos.eventIds.indexOf(eventId);
      if (index !== -1) {
        const updatedEventIds = carritos.eventIds.filter(
          (id, idx) => idx !== index
        );
        const updatedQuantities = carritos.quantities.filter(
          (quantity, idx) => idx !== index
        );
        console.log("Elemento eliminado:", eventId);
        console.log("EventIds actualizados:", updatedEventIds);
        console.log("Cantidades actualizadas:", updatedQuantities);
        return { eventIds: updatedEventIds, quantities: updatedQuantities };
      }
      return carritos;
    });
  };

  const resetStore = () => {
    set({ eventIds: [], quantities: [] });
    console.log("Carrito reseteado");
  };

  const getEventIds = () => {
    const eventIds = [];
    subscribe((carritos) => {
      eventIds.push(...carritos.eventIds);
    })();
    return eventIds;
  };

  return {
    subscribe,
    set,
    add,
    remove,
    resetStore,
    getEventIds,
  };
};

export const cartStore = createCarritoStore();
