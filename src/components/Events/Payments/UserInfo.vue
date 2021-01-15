<template>
  <div>
    <h6
      class="color-dark text-semi-bold flex align-center cursor-pointer"
      @click="goBack"
    >
      <img class="mr-1" src="../../../assets/img/arrow-left.svg" />Go back
    </h6>
    <div class="divider mt-4 mb-4"></div>
    <CustomInput
      v-model="fullName"
      label="First Name"
      :onChange="updateInput"
    />
    <CustomInput
      v-model="email"
      label="Email address"
      :onChange="updateInput"
    />
    <CustomInput
      v-model="phoneNumber"
      label="Phone number"
      :onChange="updateInput"
    />
    <div>
      <div class="order-total">
        <div class="mt-4 flex justify-between">
          <span class="text-capitalize text-sm">Total payment</span>
          <span class="color-grey text-md text-semi--bold">N10,000</span>
        </div>
      </div>
    </div>
    <div class="mt-4 column-100">
      <button to="/create-event" class="button--primary column-100">
        CONTINUE
      </button>
    </div>
    <div class="flex mt-4">
      <span class="mr-2"><img src="../../../assets/img/guarantee.svg"/></span>
      <div>
        <p class="color-dark">100% customer protection</p>
        <p class="color-grey--3">Money back guarantee</p>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from "../../Library/Input";
import { mapActions, mapState } from "vuex";

export default {
  name: "UserInfo",
  components: {
    CustomInput,
  },
  data() {
    return {
      fullName: "",
      email: "",
      phoneNumber: "",
      ticketType: "",
      ticketQuantity: "",
      ticketInfo: {},
    };
  },
  model: {
    event: "change",
  },
  props: {
    goBack: Function,
    event: Object,
    total: Number,
    vat: Number,
    cart: Object,
  },
  watch: {
    ticketInfo() {
      this.cart.tickets.map((item) => {
        if (item.name === "Regular") {
          this.ticketInfo["1"] = item.count;
        } else if (item.name === "VIP") {
          this.ticketInfo["2"] = item.count;
        } else {
          this.ticketInfo["3"] = item.count;
        }
      });
    },
  },
  computed: {
    ...mapState(["event", "fetchTicketsState"]),
  },
  methods: {
    ...mapActions(["createOrder"]),
    updateInput(value) {
      this.$emit("change", value);
      console.log(value);
    },
    
    createTicketOrder() {
      const payload = {
        event_id: this.event.id,
        email: this.email,
        phone: this.phoneNumber,
        name: this.fullName,
        base_amount: this.total,
        value_added_tax: this.vat,
        tickets_bought: `${this.ticketInfo}`,
      };
      this.createOrder(payload);
    },
  },
};
</script>
