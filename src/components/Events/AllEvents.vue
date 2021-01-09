<template>
  <div>
    <Header />
    <div class="page-entry page--transition">
      <div class="page-entry--wrap">
        <div class="page-preview container">
          <div class="fadeInUp animated">
            <div class="row">
              <div class="page-layout---card">
                <h1 class="color-dark text-xlbold">
                  The best events happening now.
                </h1>
                <div class="card-single--event">
                  <SingleEvent
                    v-for="item in array"
                    v-bind:key="item.id"
                    v-bind:event="item"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Header";
import SingleEvent from "./SingleEvent";

export default {
  name: "AllEvents",
  components: {
    Header,
    SingleEvent,
  },
  data() {
    return {
      array: [
        {
          id: 1,
          date: "8th February 2019",
          title: "The Nathan Cole Experience",
          price: "N5000 – N2,000,000",
          isFree: false,
          image: require("../../assets/img/event-image.png"),
          isAvailable: true
        },
        {
          id: 2,
          date: "10th December 2019",
          title: "One mic - By Alibaba",
          price: "N5000 – N2,000,000",
          isFree: false,
          image: require("../../assets/img/event-image.png"),
          isAvailable: false
        },
        {
          id: 3,
          date: "3rd november 2019",
          title: "Mitch24",
          price: "Free",
          isFree: true,
          image: require("../../assets/img/event-image.png"),
          isAvailable: true
        },
         {
          id: 4,
          date: "8th February 2019",
          title: "The Nathan Cole Experience",
          price: "N5000 – N2,000,000",
          isFree: false,
          image: require("../../assets/img/event-image.png"),
          isAvailable: true
        },
        {
          id: 5,
          date: "10th December 2019",
          title: "One mic - By Alibaba",
          price: "N5000 – N2,000,000",
          isFree: false,
          image: require("../../assets/img/event-image.png"),
          isAvailable: true
        },
        {
          id: 6,
          date: "3rd november 2019",
          title: "Mitch24",
          price: "Free",
          isFree: true,
          image: require("../../assets/img/event-image.png"),
          isAvailable: true
        },
      ],
    };
  },
};
</script>
