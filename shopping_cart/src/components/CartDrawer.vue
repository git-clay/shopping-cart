<template>
  <div>
    <v-btn @click="drawerOpen = !drawerOpen">
      <v-badge color="green" :content="itemCount" :value="itemCount">
        <v-icon>
          shopping_cart
        </v-icon>
      </v-badge>
    </v-btn>
    <v-navigation-drawer
      right
      fixed
      temporary
      v-model="drawerOpen"
      :width="$vuetify.breakpoint.mdAndUp ? '35vw' : '75vw'"
    >
      <h1 class="text-center">My Cart</h1>
      <v-list dense v-if="getItems">
        <v-list-item v-for="(item, idx) in getItems" :key="idx">
          <v-list-item-avatar>
            <v-img :src="item.imgSrc"/>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle
              >x{{ item.quantity }} -- ${{ price(item) }}</v-list-item-subtitle
            >
          </v-list-item-content>
          <div class="add-subtract">
            <v-btn icon fab x-small color="red" @click="addOne(item)">
              +
            </v-btn>
            <v-btn icon fab x-small color="red" @click="subtractOne(item)">
              -
            </v-btn>
          </div>
          <v-btn icon fab small color="red" @click="removeFromCart(item)">
            <v-icon>close</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
      <v-divider />
      <h5>Total: {{ total }}</h5>
      <v-btn @click="checkout">
        Checkout
      </v-btn>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("CartModule", ["itemCount", "getItems"]),
    total() {
      return this.getItems.reduce((accumulator, current) => {
        return accumulator + this.price(current);
      }, 0).toFixed(2);
    },
  },
  data() {
    return {
      drawerOpen: false,
    };
  },
  methods: {
    ...mapActions("CartModule", ["removeFromCart", "addOne", "subtractOne"]),
    price(item) {
      return +(item.price * item.quantity).toFixed(2);
    },
    checkout() {
      console.log(`next feature: post to /api/checkout`, this.getItems);
    },
  },
};
</script>

<style scoped>
.add-subtract {
  background-color: lightblue;
  border-radius: 50%;
}
</style>
