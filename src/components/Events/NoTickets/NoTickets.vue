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
                <div class="card card-small pl-5 pr-5 ">
                  <div class="ticket-input--wrap pt-5">
                    <CustomInput
                      v-model="email"
                      label="Email address"
                      :onChange="updateInput"
                    />
                  </div>
                  <div class="mt-4 column-100">
                    <!-- :class="{
                        'button--primary column-100 form-loading': getOrderState === 'loading',
                        'button--primary column-100 disabled': email === '',
                        'button--primary column-100': !loading,
                      }" -->
                    <button
                      to="/create-event"
                      :class="
                        'button--primary column-100 ' +
                          (getOrderState === 'loading'
                            ? 'form-loading'
                            : email === ''
                            ? 'disabled'
                            : '')
                      "
                      @click="handleSubmit"
                    >
                      CONFIRM AND SEND TICKET
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
import CustomInput from "../../Library/Input";
import { mapActions, mapState } from "vuex";

export default {
  name: "NoTickets",
  components: {
    Header,
    CustomInput,
  },
  data() {
    return {
      email: "",
    };
  },
  model: {
    event: "change",
  },
  computed: {
    ...mapState(["getOrderState", "event"]),
  },

  methods: {
    ...mapActions(["setUserEmail", "getOrder"]),
    updateInput(value) {
      this.$emit("change", value);
    },
    async handleSubmit() {
      const payload = {
        email: this.email,
      };
      this.setUserEmail(this.email);
      const result = await this.getOrder(payload, this.successFunction);
      if (result) {
        this.$router.push("/ticket-confirmed");
      }
    },
  },
};
</script>
