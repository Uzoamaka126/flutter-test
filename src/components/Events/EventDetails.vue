<template>
  <div>
    <Header />
    <div class="page-entry page--transition">
      <div class="page-entry--wrap">
        <div class="page-preview container">
          <div class="fadeInUp animated">
            <div class="event-page--wrap">
              <div>
                <div class="event-page--info left">
                  <h6 class="text-capitalize color-dark--2 text-normal">
                    8th February 2019
                  </h6>
                  <h1 class="text-xlbold color-dark--2">
                    The Nathan Cole Experience
                  </h1>
                  <h6 class="color-grey--2 text-normal text-italic">
                    Two-Time Grammy Award winner, Nathaniel Cole, who’s also
                    just released an album, Into The Wild, will be having his
                    first concert in Lagos, Nigeria!
                    <h6 class="color-grey--2 text-normal text-italic mt-1">
                      Fans have waited so long for this announcement, and it
                      promises to be everything anyone has imagined.
                    </h6>
                  </h6>
                  <p class="text-md color-dark mt-5">N5000 – N2,000,000</p>
                  <router-link
                    to="/create-event"
                    class="button--primary button--primary--md button-md--width mt-3"
                  >
                    BUY TICKETS
                  </router-link>
                </div>
                <div class="event-page--info right">
                  <img src="../../assets/img/event-image.png" />
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
                      Eko Atlantic Beach, Off Ahmadu Bello way, Victoria Island,
                      Lagos.
                    </p>
                    <div class="flex align-center mt-4">
                      <img src="../../assets/img/map.svg" />
                      <h6 class="ml-1 color-primary text-normal">
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
                      Friday, February 8th 2019, 10:00pm
                    </p>
                    <div class="event-social--wrap">
                      <h6 class="text-capitalize color-dark--2 text-normal mt-3">
                        SOCIAL LINKS
                      </h6>
                      <h6 class="color-dark--2 text-normal mt-3">http://www.nathanielcole.com</h6>
                      <h6 class="color-dark--2 text-normal mt-1">https://twitter.com/nathanielcole</h6>
                      <h6 class="color-dark--2 text-normal mt-1">https://instagram.com/nathanielcole/</h6>
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
</template>

<script>
import Header from "../Header";

export default {
  name: "EventDetails",
  components: {
    Header,
  },
  // props: ["id", "event"],

  data: function() {
    return {
      //id is name of the dynamic segment we created in router
      title: this.$route.params.title,
      event: this.$route.event,
    };
  },
};
</script>
