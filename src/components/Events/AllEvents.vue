<template>
  <div>
    <div v-if="eventsState === 'success'">
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
                      class="card-event"
                      :to="`events/${item.id}`"
                    >
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
                      LOAD MORE
                    </button>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Spinner v-else />
  </div>
</template>

<script>
import Header from "../Header";
import Footer from "../Footer";

import Vue from "vue";
import SingleEvent from "./SingleEventCard";
import Spinner from "../Library/Spinner";
import { mapActions, mapState } from "vuex";
// import Toasted from "vue-toasted";

export default {
  name: "AllEvents",
  components: {
    Header,
    SingleEvent,
    Spinner,
    Footer
  },
  data() {
    return {
      count: 1,
      page: 1,
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
      console.log(el);
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    },
  },
  mounted: function() {
    this.fetchAllEvents();
  },
  // beforeDestroy () {
  //   this.$event.$off(this.showEventName)
  //   events.$off(this.hideEventName)
  // },
  methods: {
    ...mapActions(["fetchEvents"]),
    endEvents() {
      Vue.toasted.show("No more events");
    },
    fetchAllEvents: async function() {
      const result = await this.fetchEvents(this.page);
      if (result === true) {
        console.log(result);
        this.page++;
      }
    },
    loadEvents: async function($event) {
      let position = this.offset($event.target);
      const loadedEvents = await this.fetchAllEvents(this.page);
      if (loadedEvents === true) {
        window.scrollTo({ top: position.top - 140, behavior: "smooth" });
        this.page++;
      }
    },
  },
};
</script>
