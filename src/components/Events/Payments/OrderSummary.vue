<template>
  <div>
    <h6 class="text-capitalize color-dark text-semi-bold">
      Order summary
    </h6>
    <div class="divider mt-4"></div>
    <div class="mt-5">
      <div v-for="item in cart.tickets" :key="item.name">
        <div class="flex justify-between mt-4">
          <span>{{ item.count }} - {{ item.name }}</span>
          <span class="color-grey">N{{ item.price }}</span>
        </div>
        <!-- <div class="mt-4 flex justify-between">
          <span>1 - VIP</span>
          <span class="color-grey">N10,000</span>
        </div> -->
      </div>
    </div>
    <div>
      <div class="order-total">
        <div class="flex justify-between">
          <span class="text-xs">Sub-total</span>
          <span class="color-grey text-xs">N{{ subtotal }}</span>
        </div>
        <div class="mt-4 flex justify-between">
          <span class="text-capitalize text-xs">VAT</span>
          <span class="color-grey text-xs">N{{ vat }}</span>
        </div>
        <div class="mt-4 flex justify-between">
          <span class="text-capitalize text-xs">Total payment</span>
          <span class="color-grey text-md text-semi--bold">N{{ total }}</span>
        </div>
      </div>
    </div>
    <div class="mt-4 column-100">
      <button
        to="/create-event"
        class="button--primary column-100"
        :class="{ disabled: btnState }"
        v-on:click="goNext"
      >
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
export default {
  name: "OrderSummary",
  components: {},
  data() {
    return {};
  },
  props: {
    goNext: Function,
    cart: Object,
    total: Number,
    subtotal: Number,
    vat: Number,
    event: Object,
    btnState: Boolean
  },
};
</script>
