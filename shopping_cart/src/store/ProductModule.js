const ProductState = {
  products: [],
  productsFetched: false,
  loading: false,
};

const ProductModule = {
  namespaced: true,

  state: () => ProductState,

  mutations: {
    LOADING: (state) => (state.loading = true),
    FETCH_PRODUCTS: (state, products) => {
      state.products = products;
      state.productsFetched = true;
      state.loading = false;
    },
    FETCH_PRODUCTS_FAIL: (state) => {
      state.loading = false;
      state.productsFetched = false;
    },
  },

  actions: {
    fetchProducts(context) {
      context.commit("LOADING");
      if (!context.getters.areProductsFetched) {
        fetch(`${process.env.VUE_APP_API}/products`)
          .then((response) => response.json())
          .then((data) => context.commit("FETCH_PRODUCTS", data))
          .catch(() => context.commit("FETCH_PRODUCTS_FAIL"));
      }
    },
  },

  getters: {
    areProductsFetched: (state) => state.productsFetched,
    getProducts: (state) => state.products,
    productsLoading: (state) => state.loading,
  },
};

export default ProductModule;
