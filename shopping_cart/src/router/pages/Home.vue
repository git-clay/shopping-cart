<template>
  <v-container>
    <v-row v-if='!productsLoading'>

      <v-col v-for="product in getProducts" :key="product.id" cols="12" md="4">
        <ProductCard :product="product" />
      </v-col>
    </v-row>
    <v-progress-circular 
      v-else
      indeterminate
      color="primary"/>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
    ProductCard: () => import("@/components/ProductCard"),
  },
  computed:{
    ...mapGetters('ProductModule',['productsLoading','getProducts'])
  },
};
</script>
