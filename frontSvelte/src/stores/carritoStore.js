import { writable } from "svelte/store";

export const eventoId = writable(0);

const createCarritoStore = () => {
  const { subscribe, set, update } = writable([]);

  const logUpdatedEventId = (carritoId) => {
    console.log(`Se actualizó el eventId a: ${carritoId}`);
  };

  return {
    subscribe,
    set: (value) => {
      logUpdatedEventId(value);
      set(value);
    },
    update,
    setEventId: (eventId) => {
      logUpdatedEventId(eventId);
      set(eventId);
    },
    clearEventId: () => {
      logUpdatedEventId(null);
      set(null);
    },
  };
};

export const eventStore = createCarritoStore();
