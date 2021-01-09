<template>
  <AllEvents />
</template>

<script>
import AllEvents from "./components/Events/AllEvents";

export default {
  name: "App",
  components: {
    AllEvents,
  },
};
</script>

<style>
@import "./assets/css/styles.css";
@import "./assets/css/misc.css";
@import "./assets/css/media.css";

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
