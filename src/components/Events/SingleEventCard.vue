<template>
  <div class="">
    <div class="event-img--wrap">
      <img v-bind:src="event.image" alt="image of an event here" />
    </div>
    <div class="event-content--wrap">
      <p class="color-grey text-capitalize text-xxs">{{ event.date }}</p>
      <h6 class="text-bold color-dark">{{ event.name }}</h6>
      <p
        class="text-normal"
        :class="{
          'color-green': event.is_free,
          'color-grey': !event.is_sold_out,
          'color-red': event.is_sold_out,
        }"
      >
        {{
          !event.is_sold_out && !event.is_free
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

// createdAt: "2020-04-30T10:51:37.000Z" // description: "For rappers" //
end_time: "2020-08-21T00:00:00.000Z" // id: 1 // image: null // is_free: false
// is_sold_out: false // name: "Lyricist Lounge" // num_of_tickets: 10000 //
social_links: (...) // start_time: "2020-08-21T00:00:00.000Z" // tags: (...) //
tickets_sale_end_date: "2020-08-21T00:00:00.000Z" // updatedAt:
"2020-04-30T10:51:37.000Z"

<script>
export default {
  name: "SingleEvent",
  props: {
    event: Object,
  },
  data() {
    return {
      
    };
  },
  // created() {
  //   
  // },
  // watch: {
  //   // $route(to, from) {
  //   //   // react to route changes...
  //   // }
  // },
  computed: {
    username() {
      return this.$route.params.title;
    },
  },
  // methods: {
  //   // a computed getter
  //   reversedMessage() {
  //     console.log("jjj:", this.event);
  //   },
  // },
};
</script>
