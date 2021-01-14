<template>
  <div>
    <div class="fadeInUp animated">
      <div class="payments-page--wrap" v-if="fetchTicketsState === 'success'">
        <div class="flex">
          <div class="ticket-wrap left">
            <div class="close-button--wrap flex mb-5">
              <button class="button--primary button-round" @click="close">
                <img src="../../../assets/img/Close.svg" class="mr-1" />Close
              </button>
            </div>
            <div>
              <h1>{{ event.name }}</h1>
              <h6 class="text-capitalize color-grey text-normal">
                {{ getStartDate }}
              </h6>
            </div>
            <div class="ticket--price--wrap">
              <div
                class="flex justify-between align-center ticket--bordered"
                v-for="item in booking"
                :key="item.name"
              >
                <p class="text-md text-normal color-dark">{{ item.name }}</p>
                <p class="text-md text-normal color-dark">N{{ item.price }}</p>
                <div class="flex align-center">
                  <button
                    class="mr-3 cursor-pointer"
                    @click="updateTicket(item.name, item.count - 1, item.price)"
                  >
                    <img src="../../../assets/img/deduct-item.svg" />
                  </button>
                  <p class="text-md text-normal color-dark">
                    {{ item.count }}
                  </p>
                  <button
                    class="ml-3 cursor-pointer"
                    @click="updateTicket(item.name, item.count + 1, item.price)"
                  >
                    <img src="../../../assets/img/add-item.svg" />
                  </button>
                </div>
              </div>
              <p class="text-xs mt-4 color-grey--3">
                Ticket sales ends on {{ getEndDate }}
              </p>
            </div>
          </div>
          <div class="order-summary--wrap">
            <div v-if="isNotCheckout">
              <OrderSummary :goNext="goNext" :event="event" />
            </div>
            <div v-else>
              <UserInfo :goBack="goBack" />
            </div>
          </div>
        </div>
      </div>
      <PaymentSkeleton v-else />
    </div>
  </div>
</template>

<script>
import OrderSummary from "./OrderSummary";
import UserInfo from "./UserInfo";
import PaymentSkeleton from "../../Skeletons/PaymentSkeleton";

import { mapActions, mapState } from "vuex";
import { getHumanDate } from "../../../utilityFunctions";

export default {
  name: "EventPayment",
  components: {
    OrderSummary,
    UserInfo,
    PaymentSkeleton,
  },
  data() {
    return {
      isNotCheckout: true,
      booking: [],
      cart: {
        tickets: [],
      },
      subTotal: 0,
      vat: 0,
      total: 0,
    };
  },
  computed: {
    ...mapState(["event", "fetchTicketsState"]),
    getEndDate() {
      return getHumanDate(this.event.tickets_sale_end_date);
    },
    getStartDate() {
      return getHumanDate(this.event.start_time);
    },
  },
  async mounted() {
    await this.fetchEventTickets();
    console.log("events:", this.event);
    this.event.tickets.map((item) => {
      this.booking.push({
        name: item.name,
        price: item.price,
        count: 0,
      });
    });
  },
  methods: {
    ...mapActions([
      "fetchEventTickets",
    ]),

    goNext() {
      this.isNotCheckout = false;
    },

    goBack() {
      this.isNotCheckout = true;
    },

    close() {
      this.$router.push(`/${this.event.id}`);
    },

    updateCart(name, count, price) {
      const isItemExist = this.cart.tickets.find((item) => {
        if (item.name === name) {
          item.count = count;
          item.price = price * count;
          return item;
        }

        return 0;
      });

      if (!isItemExist) {
        this.cart.tickets.push({ name, count, price });
      }

      this.subTotal = this.cart.tickets.reduce(
        (initial, item) => item.price + initial,
        0
      );
      // this.vat
    },

    updateTicket(name, count, price) {
      if (count < 0) return;
      this.booking.find((item) => {
        if (item.name === name) {
          item.count = count;
          this.updateCart(name, count, price);
        }
      });
    },
  },
};
</script>
