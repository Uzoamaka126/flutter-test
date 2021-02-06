<template>
  <div>
    <Loader v-if="fetchEventState === 'loading'" />
    <div v-else-if="fetchEventState === 'success'">
      <Header />
      <div class="page-entry page--transition">
        <div class="page-entry--wrap">
          <div class="page-preview container">
            <div class="fadeInUp animated">
              <div class="event-page--wrap">
                <div>
                  <div class="event-page--info left">
                    <h6 class="text-capitalize color-dark--2 text-normal">
                      {{ getHumanDate }}
                    </h6>
                    <h1 class="text-xlbold color-dark--2">
                      {{ event.name }}
                    </h1>
                    <h6 class="color-grey--2 text-normal text-italic">
                      {{ event.description }}
                    </h6>
                    <p class="text-md color-dark mt-5">N5000 – N2,000,000</p>
                    <router-link
                      v-if="
                        event.is_free === false && event.is_sold_out === false
                      "
                      :to="'/payment/' + event.id"
                      class="button--primary button--primary--md button-md--width mt-3"
                    >
                      BUY TICKETS
                    </router-link>
                    <router-link
                      v-else-if="
                        event.is_free === true && event.is_sold_out === false
                      "
                      :to="'/payment/' + event.id"
                      class="button--primary button--primary--md button-md--width mt-3"
                    >
                      REGISTER
                    </router-link>
                    <p v-else class="color-red text-normal mt-4">SOLD OUT</p>
                  </div>
                  <div class="event-page--info right">
                    <img :src="event.image" />
                  </div>
                </div>
                <div class="divider mt-5 mb-3"></div>
                <div class="event-page--others flex justify-between">
                  <div class="event-info--others left">
                    <div>
                      <h6 class="text-capitalize color-dark--2 text-normal">
                        Venue
                      </h6>
                      <p class="text-normal text-md color-dark--2 mt-3">
                        {{ event.venue }}
                      </p>
                      <div class="flex align-center mt-4">
                        <img src="../../assets/img/map.svg" />
                        <h6 class="ml-2 color-primary text-normal">
                          View map for directions
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="event-info--others right">
                    <div>
                      <h6 class="text-capitalize color-dark--2 text-normal">
                        DATE AND TIME
                      </h6>
                      <p class="text-normal text-md color-dark--2 mt-3">
                        {{ getFullDate }}
                      </p>
                      <div class="event-social--wrap">
                        <p
                          class="text-capitalize color-dark--2 text-normal mt-3"
                        >
                          SOCIAL LINKS
                        </p>
                        <h6 class="color-dark--2 text-normal mt-3">
                          <!-- {{ event.social_links.website }} -->
                        </h6>
                        <h6 class="color-dark--2 text-normal mt-1">
                          <!-- {{ event.social_links.twitter }} -->
                        </h6>
                        <h6 class="color-dark--2 text-normal mt-1">
                          <!-- {{ event.social_links.instagram }} -->
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import Header from "../Header";
import Footer from "../Footer";

import { mapActions, mapState } from "vuex";
import Loader from "../Library/Loader";
import { getFullDate, getHumanDate } from "../../utilityFunctions";

export default {
  name: "EventDetails",
  components: {
    Header,
    Loader,
    Footer,
  },
  data: function() {
    return {
      id: 0,
      eventDetails: {},
      eventDataInLocalStorage: JSON.parse(localStorage.getItem("singleEvent")),
    };
  },
  beforeMount: function() {
    window.scrollTo(0, 0);
  },
  created() {
    this.id = this.$route.params.id;
    this.handleFetchEvent();
  },
  computed: {
    ...mapState(["event", "fetchEventState", "fetchEventErrMsg"]),
    getHumanDate() {
      return getHumanDate(this.event.start_time);
    },
    getFullDate() {
      return getFullDate(this.event.start_time);
    },
  },
  mounted() {
    if (this.id === "undefined" || this.id === 0) {
      this.$router.push("/events");
    }
    let eventObj = JSON.parse(localStorage.getItem("singleEvent"));
    this.eventDetails = eventObj;
  },
  watch: {
    $route: "fetchSingleEvent",
  },
  methods: {
    ...mapActions(["fetchSingleEvent", "fetchEventTickets"]),
    async handleFetchEvent() {
      const result = await this.fetchSingleEvent(this.id);
      if (result) {
        localStorage.setItem("singleEvent", JSON.stringify(this.event));
      }
      await this.fetchEventTickets();
    },
  },
  beforeDestroy() {
    localStorage.removeItem("singleEvent");
  },
};
</script>
