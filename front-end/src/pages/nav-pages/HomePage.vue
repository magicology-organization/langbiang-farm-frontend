<template>
  <div>
    <div class="banner-section">
      <ImageSlider></ImageSlider>
      <!-- <img
        src="../../assets/cover_img.png"
        alt="Banner Image"
        class="img-fluid"
      /> -->
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

<style scoped></style>
