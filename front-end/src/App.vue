<template>
  <ClientNavBar></ClientNavBar>
  <RouterView></RouterView>
  <FooterBar></FooterBar>
</template>

<script>
import ClientNavBar from "./components/ClientNavBar.vue";
import FooterBar from "./components/FooterBar.vue";
export default {
  components: {
    ClientNavBar,
    FooterBar,
  },
};
</script>
