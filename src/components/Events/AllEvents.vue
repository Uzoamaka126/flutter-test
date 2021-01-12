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
                <div class="card-single--event mt-5">
                  <router-link
                    v-for="item in events"
                    :key="item.id"
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
import { mapActions, mapState } from "vuex";

export default {
  name: "AllEvents",
  components: {
    Header,
    SingleEvent,
  },
  computed: mapState(["events", "eventsState", "fetchEventsErrMsg"]),
  mounted: function() {
    this.fetchEvents();
  },
  methods: {
    ...mapActions(["fetchEvents"]),
  },
  // methods: {
  //   loadEvents() {
  //     this.$store.dispatch("fetchEvents");
  //   },
  // },
};
</script>
