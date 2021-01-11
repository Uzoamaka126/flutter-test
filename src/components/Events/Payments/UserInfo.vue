<template>
  <div>
    <h6 class="color-dark text-semi-bold flex align-center cursor-pointer" @click="goBack">
      <img class="mr-1" src="../../../assets/img/arrow-left.svg" />Go back
    </h6>
    <div class="divider mt-4 mb-4"></div>
    <CustomInput
      v-model="firstName"
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
export default {
  name: "UserInfo",
  components: {
    CustomInput,
  },
  data() {
    return {
      firstName: "",
      email: "",
      phoneNumber: "",
    };
  },
  model: {
    event: "change",
  },
  props: {
      goBack: Function
  },
  created() {},
  //    watch: {
  //     '$route': 'fetchData'
  //   },
  methods: {
    updateInput(value) {
      this.$emit("change", value);
      console.log(value)
    },
  },
};
</script>
