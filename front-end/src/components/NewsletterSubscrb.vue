<template>
  <section class="newsletter p-5 text-center text-white">
    <div class="my-5">
      <div class="col-md-12 mb-3">
        <h1>NEVER MISS AN UPDATE</h1>
        <p>
          Enter your email to get support from Langbiang Farm's staff and get
          notified when we have good news!
        </p>
      </div>
      <div class="col-md-6 offset-md-3">
        <form action="">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Email Address"
            />
            <button class="btn btn-primary">SUBSCRIBE</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.newsletter {
  padding: 50px 0;
  background-image: url("../assets/newsletter.png");
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
}

.newsletter h1 {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
}

.newsletter p {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 30px;
}

.newsletter form input[type="text"] {
  font-size: 15px;
  padding: 10px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #ccc;
}

.newsletter form button {
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
  border-radius: 0;
  border: none;
  background-color: #2fb93a;
  color: #fff;
  transition: all 0.3s ease;
}

.newsletter form button:hover {
  background-color: #17854a;
}

.newsletter label {
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 10px;
  display: block;
}
</style>
