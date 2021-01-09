<template>
  <div>
    <Header />
    <div class="page-entry page--transition">
      <div class="page-entry--wrap">
        <div class="page-preview container">
          <div class="fadeInUp animated">
            <div class="page-layout---card">
              <h1 class="color-dark text-xlbold">
                The best events happening now.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../Header';

export default {
  name: "AllEvents",
  components: {
    Header
  },
  props: {
    msg: String,
  },
};
</script>
