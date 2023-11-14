<template>
  <div class="container-fluid team-desc">
    <div class="text-center made-title">
      <h1>How It's Made</h1>
      <h4>
        Discover the meticulous process behind crafting our farm product,
        seamlessly blending organic methods with cutting-edge technology.
      </h4>
    </div>

    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <AlwaysFreshIcon></AlwaysFreshIcon>
            <h3 class="card-title">ALWAYS FRESH</h3>
            <p class="card-text">
              Thanks to innovative organic technologies, our products are always
              fresh and don’t need any treatment.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <OrganicIcon></OrganicIcon>
            <!-- <p class="card-text highlight-number">20 People</p> -->
            <h3 class="card-title">100% ORGANIC</h3>
            <p class="card-text">
              We adhere to our organic philosophy, which implies avoiding
              pesticides and non-organic fertilizers.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <NoAddictiveIcon></NoAddictiveIcon>
            <!-- <p class="card-text highlight-number">30 People</p> -->
            <h3 class="card-title">NO ADDICTIVES</h3>
            <p class="card-text">
              We avoid any artificial additives after harvesting the crops to
              offer you the best organic products.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <ModernFarmIcon></ModernFarmIcon>
            <!-- <p class="card-text highlight-number">20 People</p> -->
            <h3 class="card-title">MODERN FARM</h3>
            <p class="card-text">
              Though we rely on traditional organic farming a lot, we also use
              the latest farming innovations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlwaysFreshIcon from "./icons/AlwaysFresh.vue";
import ModernFarmIcon from "./icons/ModernFarm.vue";
import NoAddictiveIcon from "./icons/NoAddictive.vue";
import OrganicIcon from "./icons/WheatIcon.vue";

export default {
  components: {
    AlwaysFreshIcon,
    ModernFarmIcon,
    NoAddictiveIcon,
    OrganicIcon,
  },
};
</script>
<style scoped>
.team-desc {
  padding-top: 20px;
  padding-bottom: 80px;
  background-image: url("../assets/cover-howmade.jpg");
  background-size: cover; /* This will make the background image cover the entire container */
  background-position: center; /* This will center the background image */
  background-repeat: no-repeat; /* This will prevent the background image from being repeated */
}

.card {
  background-color: transparent;
  border: transparent;
}
.made-title {
  color: aliceblue;
}
.card-body {
  color: rgb(27, 26, 26);
}
</style>
