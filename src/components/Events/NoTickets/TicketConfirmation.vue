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
                  Enter your email and we’ll send your tickets right away!
                </h6>
                <div class="card card-md pl-5 pr-5 ">
                  <div class="ticket-input--wrap pt-5 flex justify-center flex-column mt-2">
                    <img src="../../../assets/img/check-circle.svg" />
                    <h6>
                      Your tickets have been confirmed and sent to your email
                      address at <span>ted@flutterwave.com</span>
                    </h6>
                  </div>
                  <div class="mt-4 column-100">
                    <button
                      to="/create-event"
                      class="button--primary column-100"
                    >
                      BUY MORE TICKETS
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

export default {
  name: "TicketConfirmation",
  components: {
    Header,
  },
  data: function() {
    return {
      email: "",
    };
  },
  model: {
    event: "change",
  },
  methods: {
    updateInput(value) {
      this.$emit("change", value);
    },
  },
};
</script>
