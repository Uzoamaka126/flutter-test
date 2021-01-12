<template>
  <div>
    <div v-if="fetchEventState === 'success'">
      <Header />
      <div
        
        class="page-entry page--transition"
      >
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
                      :to="'/payment/' + event.id"
                      class="button--primary button--primary--md button-md--width mt-3"
                    >
                      BUY TICKETS
                    </router-link>
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
            </div>
          </div>
        </div>
      </div>
    </div>
      <Spinner v-show="fetchEventState === 'loading'" />
  </div>
</template>

<script>
import Header from "../Header";
import { mapActions, mapState } from "vuex";
import Spinner from "../Library/Spinner";
import { getFullDate, getHumanDate } from "../../utilityFunctions";

export default {
  name: "EventDetails",
  components: {
    Header,
    Spinner,
  },
  data: function() {
    return {
      id: this.$route.params.id,
    };
  },
  beforeMount: function() {
    window.scrollTo(0, 0);
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
  mounted: function() {
    this.fetchSingleEvent(this.id);
    this.checkForEvent();
    console.log(this.fetchEventState);
  },
  watch: {
    checkEvent() {
      this.event, this.fetchEventState;
    },
  },
  methods: {
    ...mapActions(["fetchSingleEvent"]),
    checkForEvent() {
      if (this.event === {}) {
        this.$route.push("/events");
      }
    },
  },
};
</script>
