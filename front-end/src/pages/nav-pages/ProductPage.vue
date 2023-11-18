<template>
  <div class="container mt-5">
    <h2>Product List</h2>
    <div class="row">
      <div
        v-for="product in products"
        :key="product.ProductID"
        class="col-md-4 mb-4"
      >
        <div class="card">
          <img
            :src="product.IllustrateImage"
            class="card-img-top fixed-size-image"
            :alt="product.ImageDescription"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.ProductName }}</h5>
            <p class="card-text">Price: ${{ product.Price.toFixed(2) }}</p>
            <p class="card-text">{{ product.CategoryDescription }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    // Make Axios call to fetch products
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get(
          "https://langbiang-farm-backend-api.vercel.app/api/products/"
        ); // Replace with your API endpoint
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
};
</script>

<style scoped>
.fixed-size-image {
  width: 100%; /* Set the desired width */
  height: 200px; /* Set the desired height */
  object-fit: cover; /* Maintain aspect ratio and cover the entire container */
}
</style>
