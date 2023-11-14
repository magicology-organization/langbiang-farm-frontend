<template>
  <div>
    <div class="banner-section">
      <ImageSlider></ImageSlider>
    </div>
    <HomeScroll></HomeScroll>
  </div>
</template>

<script>
import HomeScroll from "../../components/HomeScroll.vue";
import ImageSlider from "../../components/ImageSlider.vue";

export default {
  components: {
    HomeScroll,
    ImageSlider,
  },
  name: "HomePage",
};
</script>

<style scoped>
* {
  background-color: rgb(238, 253, 233);
}
</style>
