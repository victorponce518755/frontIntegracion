import { writable } from "svelte/store";

export const eventoId = writable(0);

const createBoletoStore = () => {
  const { subscribe, set, update } = writable({
    eventId: 0,
  });

  const add = (eventId) => {
    update((boleto) => {
      console.log(`Se añadió el eventId: ${eventId}`);
      return { eventId };
    });
  };

  const clearEventId = () => {
    set({ eventId: 0 });
    console.log("Se borró el eventId");
  };

  const getEventId = () => {
    let eventIdValue = 0;
    subscribe((boleto) => {
      eventIdValue = boleto.eventId;
    })();
    console.log(`El eventId actual es: ${eventIdValue}`);
    return eventIdValue;
  };

  return {
    subscribe,
    add,
    clearEventId,
    getEventId,
  };
};

export const boletoStore = createBoletoStore();
