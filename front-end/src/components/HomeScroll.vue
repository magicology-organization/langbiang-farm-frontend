<template>
  <div class="scroll-animations">
    <section class="home-page-section">
      <HomeCategories></HomeCategories>
    </section>
    <hr />
    <section class="home-page-section">
      <div class="container">
        <h1>An Organic Farm with a Great Passion Behind</h1>
        <br />
        <div class="row">
          <div class="col-md-6">
            <img
              src="../assets/home/fruit.png"
              alt="Fruit and Vege"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6">
            <p>
              At Langbiang Farm, our commitment to organic practices stems from
              a dedication to quality and sustainability. We prioritize organic
              farming methods to ensure that every product that leaves our
              fields meets the highest standards of purity and nutritional
              value. By harnessing nature's wisdom, we cultivate our crops
              without synthetic pesticides or harmful chemicals, allowing the
              natural flavors and inherent goodness to shine through in every
              harvest.
            </p>
            <p>
              Quality isn't just a goal; it's ingrained in every aspect of our
              operations. From the meticulous selection of seeds to the
              nurturing of crops using innovative techniques like hydroponics
              and aeroponics, we strive for excellence. This dedication to
              quality extends beyond the growing process—it's woven into our
              stringent quality control measures that guarantee our produce
              meets the globally recognized Global Gap standards. We firmly
              believe that quality isn't an option; it's an unwavering
              commitment that defines every step of our journey from farm to
              table.
            </p>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section class="home-page-section">
      <div class="container">
        <h1>Explore Our Selection</h1>
        <br />
        <div class="row">
          <div class="col-md-6 order-md-2">
            <img
              src="../assets/home/leaf.png"
              alt="Plant Illustrarion"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6 order-md-1">
            <br />
            <p>
              Immerse yourself in our meticulously handpicked assortment of
              single-origin and artfully infused olive oils. Elevate your
              culinary creations with the opulent flavors and tantalizing aromas
              that only the most exquisite olive oils can bestow upon your
              dishes.
            </p>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section class="home-page-section">
      <div class="container">
        <h1>Newsletter</h1>
      </div>
    </section>
  </div>
</template>

<script>
import ScrollMagic from "scrollmagic";
import HomeCategories from "./HomeCategories.vue";

export default {
  name: "HomeScroll",
  mounted() {
    const controller = new ScrollMagic.Controller();
    const sectionText = this.$refs.sectionText;
    const sectionPlaceholders = this.$el.querySelectorAll(".home-page-section");

    new ScrollMagic.Scene({
      triggerElement: sectionText,
      triggerHook: 0.8,
    })
      .setClassToggle(sectionText, "fade-in")
      .addTo(controller);

    sectionPlaceholders.forEach((sectionPlaceholder) => {
      new ScrollMagic.Scene({
        triggerElement: sectionPlaceholder,
        triggerHook: 0.8,
      })
        .setClassToggle(sectionPlaceholder, "fade-in")
        .addTo(controller);
    });
  },
  components: {
    HomeCategories,
  },
};
</script>

<style>
.section-text,
.home-page-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s, transform 1s;
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.home-page-section {
  padding: 80px 0;
}

.home-page-section img {
  max-width: 100%;
}
</style>
