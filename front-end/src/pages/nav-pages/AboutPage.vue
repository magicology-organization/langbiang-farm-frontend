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
import TimelineItem from "../../components/TimeLineItem.vue";
import TeamDesc from "../../components/TeamDesc.vue";
export default {
  components: {
    TimelineItem,
    TeamDesc,
  },
  data() {
    return {
      timelineSections: [
        {
          year: "2022",
          items: [
            {
              icon: "fa fa-cogs",
              title: "JAN",
              description:
                "Identified the need for better farm management and insights at our small farm.",
            },
            {
              icon: "fa fa-cogs",
              title: "FEB",
              description:
                "Realized the lack of real-time data on crop conditions and farm operations.",
            },
            {
              icon: "fa fa-cogs",
              title: "APR",
              description:
                "Assembled a team to explore the integration of IoT devices for precision farming.",
            },
            {
              icon: "fa fa-cogs",
              title: "MAY",
              description:
                "Started developing prototypes for IoT devices to monitor soil health, weather conditions, and crop growth.",
            },
            {
              icon: "fa fa-cogs",
              title: "SEP",
              description:
                "Successfully deployed the first set of IoT devices on the farm, improving data collection and analysis.",
            },
            {
              icon: "fa fa-cogs",
              title: "DEC",
              description:
                "Expanded the use of IoT devices to monitor livestock and automate certain farm tasks.",
            },
          ],
        },
        {
          year: "2023",
          items: [
            {
              icon: "fa fa-cogs",
              title: "FEB",
              description:
                "Optimized farm operations with insights from IoT devices, resulting in increased efficiency.",
            },
            {
              icon: "fa fa-cogs",
              title: "MAY",
              description:
                "Expanded the IoT infrastructure and added new sensors for more comprehensive farm monitoring.",
            },
          ],
        },
        {
          year: "Currently",
          items: [
            {
              icon: "fa fa-cogs",
              title: "NOW",
              description:
                "Launched our farm management platform, providing real-time insights and analytics for sustainable agriculture.",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
