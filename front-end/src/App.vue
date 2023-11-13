<template>
  <ClientNavBar></ClientNavBar>
  <RouterView></RouterView>
</template>

<script>
import ClientNavBar from "./components/ClientNavBar.vue";
export default {
  components: {
    ClientNavBar,
  },
};
</script>
