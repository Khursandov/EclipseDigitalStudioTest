<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <Snacbar />
  </v-app>
</template>

<script>
import Snacbar from '@/components/ui/Snacbar.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    Snacbar
  }
};
</script>
