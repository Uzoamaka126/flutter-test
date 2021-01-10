<template>
  <div>
    <div class="fadeInUp animated">
      <div class="payments-page--wrap">
        <div class="flex">
          <div class="ticket-wrap left">
            <!-- <div class="container flex"> -->
            <div class="close-button--wrap flex mb-5">
              <button class="button--primary button-round">
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
            <!-- </div> -->
          </div>
          <div class="order-summary--wrap">
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
                  <span class="color-grey text-md text-semi--bold"
                    >N10,000</span
                  >
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventPayment",
  components: {},
  data() {
    return {
      events: [],
    };
  },
  created() {
    // this.fetchData()
  },
  //    watch: {
  //     '$route': 'fetchData'
  //   },
  async fetchData() {},
};
</script>
