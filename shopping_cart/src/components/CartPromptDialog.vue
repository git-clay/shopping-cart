<template>
    <v-dialog
      v-model="showDialog"
      width="500"
    >

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Welcome to Sahara
        </v-card-title>

        <v-card-text>
          Looks like you dont have anything in your cart... You should really change that!
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="showDialog = false"
          >
            Let's go!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import {  mapGetters } from "vuex";

export default {
    data() {
        return {
            showDialog:false
        }
    },
      computed:{
    ...mapGetters("CartModule", ["itemCount"]),
  },
  created() {
      this.showDialog = this.itemCount === 0
  },
}
</script>