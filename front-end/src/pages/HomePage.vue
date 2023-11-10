<template>
  <div>
    <div class="banner-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1>Welcome to Langbiang Farm, Dalat, Vietnam</h1>
            <p>
              Welcome to Langbiang Farm, a verdant paradise in Dalat, Vietnam,
              where the bounty of nature meets the charm of tradition. Dive into
              a world where our crops flourish under the nurturing hands of
              local farmers, ensuring each harvest is a masterpiece of flavor
              and freshness. From vibrant fruits to exquisite flowers, our farm
              is a haven for those seeking the finest produce. Come, explore the
              abundance of Langbiang Farm, where every purchase is a celebration
              of quality and authenticity.
            </p>
            <button class="btn btn-dark">Learn More</button>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="container">
      <HomeScroll></HomeScroll>
    </div>
  </div>
</template>

<script>
import HomeScroll from "../components/HomeScroll.vue";

export default {
  components: {
    HomeScroll,
  },
  name: "HomePage",
};
</script>

<style scoped>
/* Add custom styles for the component if needed */
.banner-section {
  background: url("../assets/cover_img.jpg") center/cover no-repeat;
  color: #fff;
  padding: 100px 0;
}

/* Add more styles as needed */
</style>
