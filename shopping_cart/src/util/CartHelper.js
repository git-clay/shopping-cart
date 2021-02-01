export const findIndex = (items, id) => items.findIndex((i) => i.id === id);
export const findQuantity = (items, id) =>
  items.find((item) => item.id === id)?.quantity ?? 0;
