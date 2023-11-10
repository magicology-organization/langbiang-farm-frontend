<template>
  <ClientNavBar></ClientNavBar>
  <HomePage></HomePage>
</template>

<script>
import ClientNavBar from "./components/ClientNavBar.vue";
import HomePage from "./pages/HomePage.vue";
export default {
  components: {
    ClientNavBar,
    HomePage,
  },
};
</script>
