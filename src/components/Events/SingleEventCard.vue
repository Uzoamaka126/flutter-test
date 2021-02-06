<template>
  <div class="">
    <div class="event-img--wrap">
      <img
        v-bind:src="event.image"
        v-if="event.image !== null"
        alt="image of an event here"
      />
      <img
        src="../../assets/img/no-image.jpeg"
        v-else
        alt="image of an event here"
      />
    </div>
    <div class="event-content--wrap">
      <p class="color-grey text-capitalize text-xxs">
        {{ getHumanDate }}
      </p>
      <router-link exact class="card-event" :to="`events/${event.id}`">
        <h6 class="text-bold color-dark">{{ event.name }}</h6>
      </router-link>
      <p
        class="text-normal"
        :class="{
          'color-green': event.is_free,
          'color-grey': !event.is_sold_out,
          'color-red': event.is_sold_out,
        }"
      >
        {{
          !event.is_sold_out || !event.is_free
            ? event.price
            : event.is_free && !event.is_sold_out
            ? "Free"
            : "Sold out"
        }}
      </p>
      <p>{{ username }}</p>
    </div>
  </div>
</template>

<script>
import { getHumanDate } from "../../utilityFunctions";
export default {
  name: "SingleEvent",
  props: {
    event: Object,
  },
  data() {
    return {};
  },
  computed: {
    username() {
      return this.$route.params.title;
    },
    getHumanDate() {
      return getHumanDate(this.event.start_time);
    },
  },
};
</script>
