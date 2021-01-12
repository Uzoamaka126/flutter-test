<template>
  <div>
    <div v-if="eventsState === 'success'">
      <Header />
      <div class="page-entry page--transition">
        <div class="page-entry--wrap">
          <div class="page-preview container">
            <div  class="fadeInUp animated">
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
                      class="card-event"
                      :to="'/events/' + item.id"
                    >
                      <!-- :to="{
                      name: 'EventDetails',
                      path: `/events/${item.id}`,
                      params: { id: item.id },
                    }" -->

                      <SingleEvent v-bind:event="item" v-bind:key="item.id" />
                    </router-link>
                  </div>
                  <div class="mt-5 flex align-center justify-center">
                    <button
                      to="/create-event"
                      class="button--primary button--secondary"
                      v-bind:class="{
                        'form-loading': loadMoreState === 'loading',
                      }"
                      @click="loadEvents($event)"
                    >
                      CONTINUE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Spinner v-else  />
  </div>
</template>

<script>
// v-show="eventsState === 'loading'"

import Header from "../Header";
import Vue from "vue";
import SingleEvent from "./SingleEventCard";
import Spinner from "../Library/Spinner";
import { mapActions, mapState } from "vuex";
import Toasted from "vue-toasted";

Vue.use(Toasted, {
  position: "bottom-center",
  action: {
    text: "Cancel",
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    },
  },
});

export default {
  name: "AllEvents",
  components: {
    Header,
    SingleEvent,
    Spinner,
  },
  data() {
    return {
      count: 1,
    };
  },
  computed: {
    ...mapState([
      "events",
      "eventsState",
      "fetchEventsErrMsg",
      "loadMoreState",
      "loadMoreErrMsg",
    ]),
    offset(el) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    },
  },
  mounted: function() {
    this.fetchEvents();
  },
  methods: {
    ...mapActions(["fetchEvents", "loadMoreEvents"]),
    endEvents() {
      Vue.toasted.show("No more events");
    },
    loadEvents: function(event) {
      console.log(event);
      let position = this.offset(event.target);
      this.loadMoreEvents(this.count, this.endEvents, function scroll() {
        window.scrollTo({ top: position.top - 140, behavior: "smooth" });
        return this.count + 1;
      });
    },
  },
};
</script>
