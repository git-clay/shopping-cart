import Vue from "vue";
import { findIndex, findQuantity } from "@/util/CartHelper";

const CartState = {
  items: [],
};

const CartModule = {
  namespaced: true,

  state: () => CartState,

  mutations: {
    ADD_TO_CART: (state, newItem) => {
      newItem.quantity = findQuantity(state.items, newItem.id) + 1;
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
      itemQuant.item.quantity =
        findQuantity(state.items, itemQuant.item.id) + itemQuant.amount;
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
      context.dispatch("saveCart");
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
    saveCart(context) {
      fetch(`${process.env.VUE_APP_API}/cart`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(context.getters.getItems), // going with the immutable save to ensure db always matches what user sees
      });
    },
  },

  getters: {
    getItems: (state) => state.items,
    itemCount: (state) => state.items.reduce((a, c) => a + c.quantity, 0),
  },
};

export default CartModule;
