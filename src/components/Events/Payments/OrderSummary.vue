<template>
  <div>
    <h6 class="text-capitalize color-dark text-semi-bold">
      Order summary
    </h6>
    <div class="divider mt-4"></div>
    <div class="mt-5">
      <div>
        <div class="flex justify-between">
          <span>2 - Regular</span>
          <span class="color-grey">N10,000</span>
        </div>
        <div class="mt-4 flex justify-between">
          <span>1 - VIP</span>
          <span class="color-grey">N10,000</span>
        </div>
      </div>
    </div>
    <div>
      <div class="order-total">
        <div class="flex justify-between">
          <span>Sub-total</span>
          <span class="color-grey">N110,000</span>
        </div>
        <div class="mt-4 flex justify-between">
          <span class="text-capitalize text-sm">VAT</span>
          <span class="color-grey">N10,000</span>
        </div>
        <div class="mt-4 flex justify-between">
          <span class="text-capitalize text-sm">Total payment</span>
          <span class="color-grey text-md text-semi--bold">N10,000</span>
        </div>
      </div>
    </div>
    <div class="mt-4 column-100">
      <button
        to="/create-event"
        class="button--primary column-100"
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
  },
  created() {
    // this.fetchData()
  },
  //    watch: {
  //     '$route': 'fetchData'
  //   },
  methods: {},
};
</script>
