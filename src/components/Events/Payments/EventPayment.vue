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
                <div
                  class="card-single--event"
                  v-for="item in array"
                  :key="item.id"
                >
                  <router-link
                    exact
                    :to="{
                      name: 'EventDetails',
                      path: `/events/${item.title}`,
                      params: { title: item.title },
                    }"
                    class="card-event"
                  >
                    <SingleEvent v-bind:event="item" v-bind:key="item.id" />
                  </router-link>
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
import SingleEvent from "./SingleEventCard";

export default {
  name: "EventPayment",
  components: {
    Header,
    SingleEvent,
  },
  data() {
    return {
      events: [],
    };
  },
  created() {
    // this.fetchData()
  },
  //    watch: {
  //     '$route': 'fetchData'
  //   },
  async fetchData() {
   
  },
};
</script>
