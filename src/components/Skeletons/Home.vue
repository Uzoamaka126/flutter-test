<template>
  <skeleton-theme color="#dcdcdc">
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
      </div>
      <div class="event-body">
        <div class="page-layout---card">
          <div class="event-list--wrap">
            <ul class="events-list mt-5">
              <li class="events-list--item" v-for="item in data" :key="item.id">
                <Skeleton width="{`100%`}" height="{92}" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </skeleton-theme>
</template>

<script>
import { Skeleton, SkeletonTheme } from "vue-loading-skeleton";
export default {
  name: "HomeSkeleton",
  components: {
    Skeleton,
    SkeletonTheme,
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
  background: lightgray;
}
.nav-right {
  width: auto;
  background: #e6e7e8;
}
.flex {
  display: -ms-flexbox !important;
  display: flex !important;
}
.event-body {
  width: 100%;
  padding-right: 100px;
  margin-left: auto;
  padding: 63px 40px;
  padding-left: 100px;
  margin-right: auto;
  transform: translateY(18px);
  transition: transform 0.8s;
}

.page-layout---card {
  background: var(--whiteAlt);
  position: relative;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
}
</style>
