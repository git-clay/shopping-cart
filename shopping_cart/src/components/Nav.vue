<template>
  <v-container>
    <v-row>
      <v-spacer />
      <CardDrawer />
      <CartPromptDialog/>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    CardDrawer: () => import("@/components/CartDrawer"),
    CartPromptDialog: () => import("@/components/CartPromptDialog"),
  },
};
</script>

<style scoped></style>
