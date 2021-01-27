<template>
  <div class="fadeInUp animated mt-0 account-skeleton">
    <div class="header-wrap justify-between">
      <div class="logo-icon">
        <Skeleton width="100px" height="100px" />
      </div>
      <div class="flex nav-right justify-between">
        <span class="mr-3 bottom">
          <Skeleton width="100px" height="100px" />
        </span>
        <span class="bottom">
          <Skeleton width="100px" height="100px" />
        </span>
      </div>
      <div
        class="balance-summary color-primary flex flex-column justify-between"
      >
        <Skeleton width="{120}" height="{10}" class="mb-2 bottom" />
        <Skeleton width="{120}" height="{12}" />
      </div>
    </div>
    <div class="balance-second--half">
      <Skeleton width="{`100%`}" height="{92}" />
    </div>

    <div class="flex justify-between align-end account-skel--items">
      <div class="flutter-skeleton-span">
        <Skeleton width="{`100%`}" height="{52}" />
      </div>
      <div class="flutter-skeleton-span">
        <Skeleton width="{`100%`}" height="{52}" />
      </div>
    </div>

    <div
      class="flutter-account--summary flex justify-between align-end account-skel--items"
    >
      <div class="flutter-skeleton-span">
        <Skeleton width="{`100%`}" height="{52}" />
      </div>
      <div class="flutter-skeleton-span">
        <Skeleton width="{`100%`}" height="{52}" />
      </div>
    </div>
    <div
      class="flutter-account--summary flex justify-between align-end account-skel--items"
    >
      <div class="flutter-skeleton-span">
        <Skeleton width="{`100%`}" height="{52}" />
      </div>
      <div class="flutter-skeleton-span">
        <Skeleton width="{`100%`}" height="{52}" />
      </div>
    </div>
  </div>
</template>

<script>
import { Skeleton } from "vue-loading-skeleton";
export default {
  name: "HomeSkeleton",
  components: {
    Skeleton,
  },
};
</script>

<style scoped>
.header-wrap {
  width: 100%;
  display: flex;
  padding: 10px 133px;
}
.logo-icon {
  width: 100px;
  background: lightgray
}
.nav-right {
   width: auto;
   background: #e6e7e8;
}
</style>
