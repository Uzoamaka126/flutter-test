<template>
  <div>
    <div class="fadeInUp animated">
      <div class="payments-page--wrap">
        <div class="flex">
          <div class="ticket-wrap left">
            <div class="close-button--wrap flex mb-5">
              <button class="button--primary button-round" @click="close">
                <img src="../../../assets/img/Close.svg" class="mr-1" />Close
              </button>
            </div>
            <div>
              <h1>The Nathan Cole Experience</h1>
              <h6 class="text-capitalize color-grey text-normal">
                8th February 2019
              </h6>
            </div>
            <div class="ticket--price--wrap">
              <div class="flex justify-between align-center ticket--bordered">
                <p class="text-md text-normal color-dark">Regular</p>
                <p class="text-md text-normal color-dark">N5000</p>
                <div class="flex align-center">
                  <button class="mr-2">
                    <img src="../../../assets/img/deduct-item.svg" />
                  </button>
                  <p class="text-md text-normal color-dark">2</p>
                  <button class="ml-2">
                    <img src="../../../assets/img/add-item.svg" />
                  </button>
                </div>
              </div>
              <div class="flex justify-between align-center ticket--bordered">
                <p class="text-md text-normal color-dark">Regular</p>
                <p class="text-md text-normal color-dark">N5000</p>
                <div class="flex align-center">
                  <button class="mr-2">
                    <img src="../../../assets/img/deduct-item.svg" />
                  </button>
                  <p class="text-md text-normal color-dark">2</p>
                  <button class="ml-2">
                    <img src="../../../assets/img/add-item.svg" />
                  </button>
                </div>
              </div>
              <div class="flex justify-between align-center ticket--bordered">
                <p class="text-md text-normal color-dark">Regular</p>
                <p class="text-md text-normal color-dark">N5000</p>
                <div class="flex align-center">
                  <button class="mr-2">
                    <img src="../../../assets/img/deduct-item.svg" />
                  </button>
                  <p class="text-md text-normal color-dark">2</p>
                  <button class="ml-2">
                    <img src="../../../assets/img/add-item.svg" />
                  </button>
                </div>
              </div>
              <p class="text-xs mt-4 color-grey--3">
                Ticket sales ends on 22nd November 2019
              </p>
            </div>
          </div>
          <div class="order-summary--wrap">
            <div v-if="isNotCheckout">
              <OrderSummary :goNext="goNext" />
            </div>
            <div v-else>
              <UserInfo :goBack="goBack" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderSummary from "./OrderSummary";
import UserInfo from "./UserInfo";
import { mapActions, mapState } from "vuex";

export default {
  name: "EventPayment",
  components: {
    OrderSummary,
    UserInfo,
  },
  data() {
    return {
      isNotCheckout: true,
    };
  },
  computed: {
    ...mapState(["event"]),
  },
  created() {
  },
  methods: {
    ...mapActions(["fetchSingleEvent"]),
    goNext() {
      this.isNotCheckout = false;
    },
    goBack() {
      this.isNotCheckout = true;
    },
    close() {
      this.$router.push(`/events/' + ${this.event.id}`);
    },
  },
};
</script>
