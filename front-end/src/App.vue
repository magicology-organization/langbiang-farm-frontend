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
<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway&family=Work+Sans:ital,wght@0,300;0,400;1,200;1,300&display=swap");

* {
  font-family: "Raleway", sans-serif;
  font-family: "Work Sans", sans-serif;
}
</style>
