<template>
  <div id="carouselExample" class="carousel slide">
    <transition name="fade" mode="out-in">
      <div :key="currentIndex" class="carousel-inner">
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="{ 'carousel-item': true, active: index === currentIndex }"
        >
          <img
            :src="item.src"
            class="d-block w-100"
            :alt="'Slide ' + (index + 1)"
          />
        </div>
      </div>
    </transition>
    <button class="carousel-control-prev" type="button" @click="prevSlide">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" @click="nextSlide">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { src: "./images/slider/cover_img.png" },
        { src: "./images/slider/banner2.png" },
        { src: "./images/slider/banner3.png" },
      ],
      currentIndex: 0,
      intervalId: null,
    };
  },
  mounted() {
    this.startAutoSwitch();
  },
  beforeDestroy() {
    this.stopAutoSwitch();
  },
  methods: {
    startAutoSwitch() {
      this.intervalId = setInterval(this.nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
    },
    stopAutoSwitch() {
      clearInterval(this.intervalId);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* Add your other styles here if needed */
</style>

<!-- Old Implementation (With animation) -->
<!-- <template>
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/cover_img.png"
            class="d-block w-100"
            alt="Slide 1"
          />
        </div>
        <div class="carousel-item">
          <img src="../assets/banner2.png" class="d-block w-100" alt="Slide 2" />
        </div>
        <div class="carousel-item">
          <img src="../assets/banner3.png" class="d-block w-100" alt="Slide-3" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>

  <script></script>

  <style scoped></style>
   -->
