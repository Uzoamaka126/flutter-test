<template>
  <div>
    <Header />
    <div class="page-entry page--transition">
      <div class="page-entry--wrap">
        <div class="page-preview container">
          <div class="fadeInUp animated">
            <div class="event-page--wrap">
              <div class="ticket-form--wrap">
                <h6 class="color-dark text-bold">
                  Your Order has been placed!
                </h6>
                <div class="card card-md pl-5 pr-5 ">
                  <div
                    class="ticket-input--wrap pt-5 flex justify-center flex-column mt-2"
                  >
                    <img src="../../../assets/img/check-circle.svg" />
                    <h6 class="text-normal">
                      Your order is being processed. We'll send a confirmation to your
                      email as soon as possible.
                      <p class="color-blue">{{ userInfo.email }}</p>
                    </h6>
                  </div>
                  <div class="mt-4 column-100">
                    <button class="button--primary column-100" @click="goNext">
                      Back to homepage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../Header";
import { mapState } from "vuex";

export default {
  name: "PaymentConfirmation",
  components: {
    Header,
  },
  data: function() {
    return {
      email: "",
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    goNext() {
      this.$router.push("/");
    },
  },
};
</script>
