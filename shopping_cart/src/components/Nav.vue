<template>
  <v-container>
    <v-row>
      <v-spacer />
      <CardDrawer />
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    CardDrawer: () => import("@/components/CartDrawer"),
  },
};
</script>

<style scoped></style>
