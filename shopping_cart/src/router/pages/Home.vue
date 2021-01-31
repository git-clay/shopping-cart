<template>
  <v-container v-if="products">
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" md="4">
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    ProductCard: () => import("@/components/ProductCard"),
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Watches",
          imgSrc:
            "https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=373&format=pjpg&exif=0&iptc=0",
          price: 45.98,
        },
        {
          id: 2,
          name: "Cardboard box",
          imgSrc:
            "https://burst.shopifycdn.com/photos/man-holding-shipping-box-on-red-brick.jpg?width=373&format=pjpg&exif=0&iptc=0",
          price: 100.02,
        },
        {
          id: 3,
          name: "Hotdog pin",
          imgSrc:
            "https://burst.shopifycdn.com/photos/hotdog-pin-man-jean-jacket.jpg?width=373&format=pjpg&exif=0&iptc=0",
          price: 6.19,
        },
        {
          id: 4,
          name: "Pug Socks",
          imgSrc:
            "https://burst.shopifycdn.com/photos/legs-crossed-pug-socks.jpg?width=373&format=pjpg&exif=0&iptc=0",
          price: 9.99,
        },
        {
          id: 5,
          name: "Camera scented oil",
          imgSrc:
            "https://burst.shopifycdn.com/photos/product-photography-camera.jpg?width=373&format=pjpg&exif=0&iptc=0",
          price: 54.99,
        },
        {
          id: 6,
          name: "Budget Tuxedo",
          imgSrc:
            "https://burst.shopifycdn.com/photos/toddler-tuxedo-onesie.jpg?width=373&format=pjpg&exif=0&iptc=0",
          price: 5.66,
        },
      ],
    };
  },
};
</script>
