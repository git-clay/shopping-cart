<template>
  <v-container>
    <v-app id="app" class="my-10">
      <Nav />
      <v-main id="appBody">
        <div class="mainContentHeight px-0">
          <router-view />
        </div>
      </v-main>
    </v-app>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
  methods: {
    ...mapActions('ProductModule',['fetchProducts'])
  },
  created() {
    this.fetchProducts()
  },
};
</script>
