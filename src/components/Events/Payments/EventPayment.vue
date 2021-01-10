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
            <h6 class="text-capitalize color-grey text-normal">
              Order summary
            </h6>
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
