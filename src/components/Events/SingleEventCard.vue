<template>
  <div class="">
    <div class="event-img--wrap">
      <img v-bind:src="event.image" alt="image of an event here" />
    </div>
    <div class="event-content--wrap">
      <p class="color-grey text-capitalize text-xxs">{{ event.date }}</p>
      <h6 class="text-bold color-dark">{{ event.title }}</h6>
      <p
        class="text-normal"
        :class="{
          'color-green': isFree,
          'color-grey': !isFree,
          'color-red': !isAvailable,
        }"
      >
        {{ isAvailable ? event.price : "Sold out" }}
      </p>
      <p>{{ username }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleEvent",
  props: {
    event: Object,
  },
  data() {
    return {
      isFree: this.event.isFree,
      isAvailable: this.event.isAvailable,
    };
  },
  // created() {
  //   this.reversedMessage();
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
