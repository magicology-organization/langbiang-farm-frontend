<template>
  <TeamDesc></TeamDesc>
  <section class="timeline_area section_padding_130">
    <div class="container">
      <!-- ... other content ... -->
      <div class="row">
        <div class="col-12">
          <!-- Timeline Area -->
          <div class="text-center">
            <h6>Our History</h6>
            <h3>
              Chronicles of Our Two-Year Journey Towards Farm Digital
              Transformation
            </h3>
          </div>
          <div class="apland-timeline-area">
            <TimelineItem
              v-for="section in timelineSections"
              :key="section.year"
              :year="section.year"
              :items="section.items"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import TimelineItem from "../../components/TimeLineItem.vue";
import TeamDesc from "../../components/TeamDesc.vue";

export default {
  components: {
    TimelineItem,
    TeamDesc,
  },
  data() {
    return {
      timelineSections: [],
    };
  },
  created() {
    axios
      .get("/data/timelineData.json")
      .then((response) => {
        this.timelineSections = response.data;
      })
      .catch((error) => {
        console.error("Error fetching timeline data:", error);
      });
  },
};
</script>

<style scoped></style>
