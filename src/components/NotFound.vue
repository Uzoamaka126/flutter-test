<template>
  <div>
    <div class="page-entry page--transition">
      <div class="page-entry--wrap">
        <div class="page-preview container">
          <div class="fadeInUp animated">
            <h1 class="color-dark mb">
              Oops! Looks like you are on the wrong page.
            </h1>
            <router-link to="/" class="color-primary">
              Go back to homepage
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  components: {},
};
</script>
