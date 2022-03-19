<template>
  <v-app>
    <AppTopBar />
    <v-main>
      <MeuInicio />
    </v-main>
  </v-app>
</template>

<script>
import MeuInicio from "./components/MeuInicio";
import AppTopBar from "./components/shared/AppTopBar.vue";
export default {
  name: "App",

  components: {
    MeuInicio,
    AppTopBar,
  },
};
</script>
