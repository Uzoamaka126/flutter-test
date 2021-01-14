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
                v-for="item in event.tickets"
                :key="item.id"
              >
                <p class="text-md text-normal color-dark">{{ item.name }}</p>
                <p class="text-md text-normal color-dark">N{{ item.price }}</p>
                <div class="flex align-center">
                  <!-- @click="getMatchingDecrementCountFunction(item.name)" -->
                  <button
                    class="mr-3 cursor-pointer"
                    @click="getMatchingDecrementCountFunction(item)"
                  >
                    <img src="../../../assets/img/deduct-item.svg" />
                  </button>
                  <p class="text-md text-normal color-dark">
                    {{ getMatchingCount(item.name) }}
                  </p>
                  <button
                    class="ml-3 cursor-pointer"
                    @click="getMatchingIncrementCountFunction(item)"
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
    };
  },
  computed: {
    ...mapState(["event", "fetchTicketsState", "cart"]),
    getEndDate() {
      return getHumanDate(this.event.tickets_sale_end_date);
    },
    getStartDate() {
      return getHumanDate(this.event.start_time);
    },
  },
  mounted() {
    this.fetchEventTickets();
  },
  methods: {
    ...mapActions([
      "fetchEventTickets",
      "incrementRegularCount",
      "incrementVipCount",
      "incrementTableCount",
      "decrementRegularCount",
      "decrementVipCount",
      "decrementTableCount",
      "setUserCart",
    ]),

    goNext() {
      this.isNotCheckout = false;
    },

    goBack() {
      this.isNotCheckout = true;
    },

    close() {
      this.$router.push(`/events/${this.event.id}`);
    },

    getMatchingCount(name) {
      if (name === "Regular") {
        return this.event.counts.regular;
      } else if (name === "VIP") {
        return this.event.counts.vip;
      } else {
        return this.event.counts.table;
      }
    },

    getMatchingIncrementCountFunction(item) {
      const itemArr = this.event.tickets.filter((d) => d.name === item.name);
      console.log(itemArr);
      if (itemArr[0].quantity === undefined) {
        itemArr[0].quantity = 0;
      } else {
        itemArr[0].quantity += 1;
      }
      this.setUserCart(itemArr);

      if (item.name === "Regular") {
        return this.incrementRegularCount();
      } else if (name === "VIP") {
        return this.incrementVipCount();
      } else {
        return this.incrementTableCount();
      }
    },

    getMatchingDecrementCountFunction(item) {
      const itemArr = this.event.tickets.filter((d) => d.name === item.name);
      if (itemArr[0].quantity === undefined) {
        itemArr[0].quantity = 0;
      } else {
        itemArr[0].quantity -= 1;
      }
      this.setUserCart(itemArr);

      if (item.name === "Regular") {
        return this.decrementRegularCount();
      } else if (name === "VIP") {
        return this.decrementVipCount();
      } else {
        return this.decrementTableCount();
      }
    },

    getCartDetails(item) {
      const payload = {
        name: item.name,
        count:
          item.name === "Regular"
            ? this.event.counts.regular
            : item.name === "VIP"
            ? this.event.counts.vip
            : this.event.counts.table,
        price:
          item.name === "Regular"
            ? item.price * this.event.counts.regular
            : item.name === "VIP"
            ? item.price * this.event.counts.vip
            : item.price * this.event.counts.table,
      };
      console.log(payload);
      this.addToCart(payload);
      if (name === "Regular") {
        return this.decrementRegularCount();
      } else if (name === "VIP") {
        return this.decrementVipCount();
      } else {
        return this.decrementTableCount();
      }
    },
  },
};
</script>
