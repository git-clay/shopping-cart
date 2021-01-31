import Vue from "vue";

const CartState = {
  items: [],
};
const findIndex = (items, id) => items.findIndex((i) => i.id === id);
const CartModule = {
  namespaced: true,

  state: () => CartState,

  mutations: {
    ADD_TO_CART: (state, newItem) => {
      const quantity =
        state.items.find((item) => item.id === newItem.id)?.quantity ?? 0;
      newItem.quantity = quantity + 1;
      if (state.items.some((item) => item.id === newItem.id)) {
        Vue.set(state.items, findIndex(state.items, newItem.id), newItem);
      } else {
        state.items.push(newItem);
      }
    },
    REMOVE_FROM_CART: (state, removeItem) => {
      state.items.splice(findIndex(state.items, removeItem.id), 1);
    },
    CHANGE_QUANTITY: (state, itemQuant) => {
      const quantity =
        state.items.find((item) => item.id === itemQuant.item.id)?.quantity ??
        0;
      itemQuant.item.quantity = quantity + itemQuant.amount;
      const index = findIndex(state.items, itemQuant.item.id);
      if (itemQuant.item.quantity <= 0) {
        state.items.splice(index, 1);
      } else {
        Vue.set(state.items, index, itemQuant.item);
      }
    },
  },

  actions: {
    addToCart(context, item) {
      context.commit("ADD_TO_CART", item);
    },
    removeFromCart(context, item) {
      context.commit("REMOVE_FROM_CART", item);
    },
    addOne(context, item) {
      context.commit("CHANGE_QUANTITY", { item, amount: 1 });
    },
    subtractOne(context, item) {
      context.commit("CHANGE_QUANTITY", { item, amount: -1 });
    },
  },

  getters: {
    getItems: (state) => state.items,
    itemCount: (state) => state.items.reduce((a, c) => a + c.quantity, 0),
  },
};

export default CartModule;
