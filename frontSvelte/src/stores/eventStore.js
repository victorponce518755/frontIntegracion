import { writable } from "svelte/store";

export const eventoId = writable(0);

const createEventStore = () => {
  const { subscribe, set, update } = writable(null);

  const logUpdatedEventId = (eventId) => {
    console.log(`Se actualizó el eventId a: ${eventId}`);
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

export const eventStore = createEventStore();
