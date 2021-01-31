import Vue from "vue";
import Vuex from "vuex";
import CartModule from "./CartModule";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    CartModule,
  },
  strict: process.env.NODE_ENV !== "production",
});

export default store;
