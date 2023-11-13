<template>
  <!-- Main Products Highlight -->
  <section class="products mt-5">
    <div class="row text-center">
      <div class="col-sm-12 mb-2">
        <h1 class="fw-bold">OUR BRIEF INTRODUCTION</h1>
      </div>
      <div
        class="col-sm-4 cat-container my-2"
        v-for="category in categories"
        :key="category.id"
      >
        <img
          :src="category.img"
          class="img-fluid cat-img"
          :alt="category.title"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
    };
  },
  created() {
    fetch("/data/categories.json")
      .then((response) => response.json())
      .then((data) => {
        this.categories = data;
      });
  },
};
</script>

<style scoped>
.cat-container {
  position: relative;
}

.cat-img {
  transition: all 0.3s ease-in-out;
  border-radius: 30px;
  box-shadow: 5px 5px #4141415c;
}
</style>
