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
            <h5 class="card-title">Field Operations Team</h5>
            <AlwaysFreshIcon></AlwaysFreshIcon>

            <p class="card-text">
              Managing and overseeing daily farm activities with a focus on
              precision and efficiency.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Technology Integration Team</h5>
            <OrganicIcon></OrganicIcon>
            <!-- <p class="card-text highlight-number">20 People</p> -->
            <p class="card-text">
              Leveraging cutting-edge technology for seamless farm operations,
              ensuring reliability and security.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Crop Management Team</h5>
            <NoAddictiveIcon></NoAddictiveIcon>
            <!-- <p class="card-text highlight-number">30 People</p> -->
            <p class="card-text">
              Utilizing data analytics and expertise to optimize crop yields and
              quality.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Technology Integration Team</h5>
            <ModernFarmIcon></ModernFarmIcon>
            <!-- <p class="card-text highlight-number">20 People</p> -->
            <p class="card-text">
              Leveraging cutting-edge technology for seamless farm operations,
              ensuring reliability and security.
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
}
.highlight-number {
  font-size: 30px;
  color: #ff5733;
}
.card {
  background-color: transparent;
  border: transparent;
}
.made-title {
  color: aliceblue;
}
</style>
