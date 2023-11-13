<template>
  <div class="single-timeline-area">
    <div
      class="timeline-date wow fadeInLeft"
      style="
        visibility: visible;
        animation-delay: 0.1s;
        animation-name: fadeInLeft;
      "
    >
      <p>{{ year }}</p>
    </div>
    <div class="row">
      <div
        v-for="item in items"
        :key="item.title"
        class="col-12 col-md-6 col-lg-4"
      >
        <div
          class="single-timeline-content d-flex wow fadeInLeft"
          style="
            visibility: visible;
            animation-delay: 0.3s;
            animation-name: fadeInLeft;
          "
        >
          <div class="timeline-icon">
            <i :class="item.icon" aria-hidden="true"></i>
          </div>
          <div class="timeline-text">
            <h6>{{ item.title }}</h6>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    year: String,
    items: Array,
    dateStyle: String,
    itemStyle: String,
  },
};
</script>

<style scoped>
.timeline_area {
  position: relative;
  z-index: 1;
}

body {
  margin-top: 20px;
}

.single-timeline-area {
  position: relative;
  z-index: 1;
  padding-left: 180px;
}
@media only screen and (max-width: 575px) {
  .single-timeline-area {
    padding-left: 100px;
  }
}
.single-timeline-area .timeline-date {
  position: absolute;
  width: 180px;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -ms-grid-row-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding-right: 60px;
}
@media only screen and (max-width: 575px) {
  .single-timeline-area .timeline-date {
    width: 100px;
  }
}
.single-timeline-area .timeline-date::after {
  position: absolute;
  width: 3px;
  height: 100%;
  content: "";
  background-color: #ebebeb;
  top: 0;
  right: 30px;
  z-index: 1;
}
.single-timeline-area .timeline-date::before {
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: rgba(29, 177, 18, 0.71);
  content: "";
  top: 50%;
  right: 26px;
  z-index: 5;
  margin-top: -5.5px;
}
.single-timeline-area .timeline-date p {
  margin-bottom: 0;
  color: #020710;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 500;
}
.single-timeline-area .single-timeline-content {
  position: relative;
  z-index: 1;
  padding: 30px 30px 25px;
  border-radius: 6px;
  margin-bottom: 15px;
  margin-top: 15px;
  -webkit-box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125);
  box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125);
  border: 1px solid #ebebeb;
}
@media only screen and (max-width: 575px) {
  .single-timeline-area .single-timeline-content {
    padding: 20px;
  }
}
.single-timeline-area .single-timeline-content .timeline-icon {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 30px;
  height: 30px;
  background-color: rgba(29, 177, 18, 0.71);
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30px;
  flex: 0 0 30px;
  text-align: center;
  max-width: 30px;
  border-radius: 50%;
  margin-right: 15px;
}
.single-timeline-area .single-timeline-content .timeline-icon i {
  color: #ffffff;
  line-height: 30px;
}
.single-timeline-area .single-timeline-content .timeline-text h6 {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
}
.single-timeline-area .single-timeline-content .timeline-text p {
  font-size: 13px;
  margin-bottom: 0;
}
.single-timeline-area .single-timeline-content:hover .timeline-icon,
.single-timeline-area .single-timeline-content:focus .timeline-icon {
  background-color: #020710;
}
.single-timeline-area .single-timeline-content:hover .timeline-text h6,
.single-timeline-area .single-timeline-content:focus .timeline-text h6 {
  color: #3f43fd;
}
</style>
