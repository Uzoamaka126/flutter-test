<template>
  <div class="loader--wrap">
    <div class="spinner-wrap">
      <span class="spinner"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped>
.loader--wrap {
  display: flex;
  justify-content: center;
}

.spinner-wrap {
  position: absolute;
  top: 68px;
  left: 50%;
  transform: translateX(-50%);
  padding: 7px;
  background: #fff;
  border-radius: 100px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--borderOff);
  z-index: 1;
}

.spinner {
  width: 22px;
  height: 22px;
  display: block;
  color: var(--primaryColor);
}

.spinner:after {
  content: "";
  width: 100%;
  height: 100%;
  display: inline-block;
  border: 2px solid currentColor;
  border-bottom-color: transparent;
  border-radius: 100%;
  background: transparent;
  animation: rotate 0.75s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(359deg);
  }
}

@-webkit-keyframes rotate {
  100% {
    transform: rotate(359deg);
  }
}
</style>
