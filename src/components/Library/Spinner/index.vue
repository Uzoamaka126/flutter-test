<template>
  <transition>
    <div class="loader"></div>
  </transition>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style scoped>
.loader {
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #f5a623;
  border-bottom: 5px solid #f5a623;
  width: 30px;
  height: 30px;
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
