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
        <div class="mt-4 flex justify-between align-center">
          <span class="text-capitalize text-sm">Total payment</span>
          <span class="color-grey text-md text-semi--bold">N{{ total }}</span>
        </div>
      </div>
    </div>
    <div class="mt-4 column-100">
      <button
        :class="
          'button--primary column-100 ' +
            (createOrderState === 'loading'
              ? 'form-loading'
              : email === '' || fullName === '' || phoneNumber === ''
              ? 'disabled'
              : '')
        "
        @click="createTicketOrder"
      >
        <span>CONTINUE</span>
      </button>
    </div>
    <div class="flex mt-4 align-center">
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
import { generateRandomNum } from "../../../utilityFunctions";

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
      ticketInfo: {},
    };
  },
  model: {
    event,
  },
  props: {
    goBack: Function,
    event: Object,
    total: Number,
    vat: Number,
    cart: Object,
  },
  watch: {
    cart: {
      deep: true,
      handler: "changeTicketInfo",
    },

    ticketInfo: {
      immediate: true,
    },
  },
  computed: {
    ...mapState([
      "makePaymentErrMsg",
      "makePaymentState",
      "link",
      "createOrderState",
      "createOrderErrMsg",
    ]),
  },
  methods: {
    ...mapActions(["createOrder", "makeTicketPayment", "setUserEmail"]),

    updateInput(value) {
      this.$emit("change", value);
    },

    changeTicketInfo() {
      for (let item in this.cart.tickets) {
        console.log(item, this.cart.tickets);
        let key = this.cart.tickets[item];
        if (key.name === "Regular") {
          this.$set(this.ticketInfo, "1", key.count);
        } else if (key.name === "VIP") {
          this.ticketInfo = { ...this.ticketInfo, 2: key.count };
          this.ticketInfo["2"] = key.count;
        } else {
          this.ticketInfo = { ...this.ticketInfo, 3: key.count };
        }
      }
    },

    async createTicketOrder() {
      const payload = {
        event_id: this.event.id,
        email: this.email,
        phone: this.phoneNumber,
        name: this.fullName,
        base_amount: this.total,
        value_added_tax: this.vat,
        tickets_bought: `${this.ticketInfo}`,
      };
      this.setUserEmail(this.email);
      const result = await this.createOrder(payload);
      if (result) {
        const payload = {
          tx_ref: generateRandomNum(),
          amount: this.total.toString(),
          currency: "NGN",
          payment_options: "card",
          redirect_url: this.$router.push("/payment-confirm"),
          customer: {
            email: this.email,
            phonenumber: this.phoneNumber,
            name: this.fullName,
          },
          customizations: {
            title: "Pied Piper Payments",
            description: "Middleout is not free.Pay the price",
            logo: "https://assets.piedpiper.com/logo.png",
          },
        };
        this.makeTicketPayment(payload);
      }
    },
    makePayment() {},
  },
};
</script>
