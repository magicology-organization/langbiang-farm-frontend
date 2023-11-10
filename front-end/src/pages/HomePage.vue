<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Your Website Name</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <!-- 'ms-auto' class aligns items to the right -->
            <li class="nav-item">
              <a class="nav-link" href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Banner Section -->
    <div class="banner-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1>Welcome to Your Website!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non libero nec turpis consectetur rutrum.
            </p>
            <button class="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
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
  background: url("https://via.placeholder.com/1600x400") center/cover no-repeat;
  color: #fff;
  padding: 100px 0;
}

/* Add more styles as needed */
</style>
