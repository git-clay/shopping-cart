import Vue from "vue";
import Vuex from "vuex";
import CartModule from "./CartModule";
import ProductModule from "./ProductModule";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    CartModule,
    ProductModule,
  },
  strict: process.env.NODE_ENV !== "production",
});

export default store;
