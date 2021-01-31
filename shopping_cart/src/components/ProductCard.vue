<template>
  <div>
    <v-card v-if="product" hover>
      <v-img :src="product.imgSrc" :alt="product.name" max-height="200" />
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-subtitle>${{ product.price }}</v-card-subtitle>
      <v-card-actions>
        <v-btn color="primary" @click="addToCart(product)">
          Add to cart
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: ["product"],
  methods: {
    ...mapActions("CartModule", ["addToCart"]),
  },
};
</script>
