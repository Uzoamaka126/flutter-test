<template>
  <div>
    <Loader v-if="eventsState === 'loading'" />
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
                  <div class="event-list--wrap">
                    <ul class="events-list mt-5">
                      <li
                        class="events-list--item"
                        v-for="item in events"
                        :key="item.id"
                      >
                        <SingleEvent v-bind:event="item" v-bind:key="item.id" />
                      </li>
                    </ul>
                  </div>
                  <div class="mt-5 flex align-center justify-center">
                    <button
                      to="/create-event"
                      class="button--primary button--secondary"
                      v-bind:class="{
                        'form-loading-alt': loadMoreState === 'loading',
                      }"
                      @click="loadMoreEvents(page)"
                    >
                      <span>LOAD MORE</span>
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
    
  </div>
</template>

<script>
import Header from "../Header";
import Footer from "../Footer";

import Vue from "vue";
import SingleEvent from "./SingleEventCard";
import Loader from "../Library/Loader";
// import Spinner from "../Library/Spinner";
import { mapActions, mapState } from "vuex";
// import Toasted from "vue-toasted";

export default {
  name: "AllEvents",
  components: {
    Header,
    SingleEvent,
    // Spinner,
    Footer,
    Loader,
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
  methods: {
    ...mapActions(["fetchEvents", "loadMoreEvents"]),
    endEvents() {
      Vue.toasted.show("No more events");
    },
    fetchAllEvents: async function() {
      const result = await this.fetchEvents(this.page);
      if (result === true) {
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
