<template>
  <transition>
    <!-- <svg
      class="spinner"
      :class="{ show: show }"
      v-show="show"
      width="44px"
      height="44px"
      viewBox="0 0 44 44"
    >
      <circle
        class="path"
        fill="none"
        stroke-width="4"
        stroke-linecap="round"
        cx="22"
        cy="22"
        r="20"
      ></circle>
    </svg> -->

    <div class="loader"></div>
  </transition>
</template>

<script>
export default {
  name: "Spinner",
  props: ["show"],
  //   serverCacheKey: (props) => props.show,
};
</script>

<style scoped>
.loader {
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #f5a623;
  border-bottom: 5px solid #f5a623;
  width: 60px;
  height: 60px;
  -webkit-animation: spin-data-v-48417230 2s linear infinite;
  animation: spin-data-v-48417230 2s linear infinite;
  margin: 180px auto 0;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
