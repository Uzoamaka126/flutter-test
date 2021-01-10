<template>
  <div>
    <Header />
    <div class="page-entry page--transition">
      <div class="page-entry--wrap">
        <div class="page-preview container">
          <div class="fadeInUp animated">
            <div class="row">
             jjjj
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Header";

export default {
  name: "EventDetails",
  components: {
    Header,
  },
  // props: ["id", "event"],

  data: function() {
    return {
      //id is name of the dynamic segment we created in router
      title: this.$route.params.title,
      event: this.$route.event
    };
  },
};
</script>
