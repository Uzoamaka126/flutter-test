<template>
  <div class="card-event">
    <div class="event-img--wrap">
      <img v-bind:src="event.image" alt="image of an event here" />
    </div>
    <div class="event-content--wrap">
      <p>{{ event.date }}</p>
      <h6 class="text-bold">{{ event.title }}</h6>
      <p>{{ event.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleEvent",
  components: {},
  props: {
    event: Object,
  },
  created() {
      this.reversedMessage()
  },
  methods: {
    // a computed getter
    reversedMessage() {
      console.log("jjj:", this.event);
    },
  },
};
</script>
