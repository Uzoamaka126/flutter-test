<template>
  <footer>
    <div
      class="flex justify-between align-center column--100 footer-wrap header--wrap"
    >
      <div class="nav-brand">
        <p class="color-grey--2 text-xs">Copyright 2019. Flutterwave inc</p>
      </div>
      <div class="footer-right">
        <p class="color-grey--2 text-xs">
          Terms & Conditions
        </p>
        <p class="color-grey--2 text-xs second">
          Privacy Policy
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  margin-top: 130px;
  /* position: fixed; */
  left: 0;
  bottom: 0;
  width: 100%;
}
.footer-wrap {
  padding-right: 200px;
  padding-left: 200px;
  max-width: 1200px;
  padding-top: 0px;
  padding-bottom: 0px;
}
.footer-right {
  display: flex;
  align-items: center;
}
.footer-right .second {
  margin-left: 48px;
}
</style>
