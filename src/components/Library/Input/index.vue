<template>
  <div class="input-container">
    <label>{{ label }}</label>
    <input
      type="text"
      :value="value"
      class="input"
      v-bind:class="{ width: isActive, 'text-danger': hasError }"
      :style="[
        width
          ? { width: width }
          : { width: '100%' },
      ]"
      @focus="show = !show"
      @blur="show = !show"
      @input="$emit('update', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  components: {},
  data() {
    return {
      show: false,
    };
  },
  props: ["value", "label", "width"],
  model: {
    prop: "value",
    event: "update",
  },
};
</script>

<style scoped>
.input {
  background: #fdfdfd;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  color: #555;
  /* width: 100%; */
  outline: none;
  padding: 15px 5px;
  margin-top: 12px;
}
.input-container {
  width: 100%;
  /* padding: 0.5rem 0.5rem 0 0; */
}

label {
  color: #333333;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.5px;
  font-weight: 400;
}

.input__effect {
  float: left;
  width: 100%;
  margin: 1.5rem 0rem 1.5rem 0;
  position: relative;
} /* necessary to give position: relative to parent. */

.input__hint {
  float: left;
  width: 100%;
  margin: -1.2rem 0 0 0;
  position: relative;
  font-size: 0.8rem;
  opacity: 0.6;
}

.effect {
  border: 0;
  padding: 4px 0;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
}

.effect ~ .focus__border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: indigo;
  transition: 0.4s;
}

.effect:focus ~ .focus__border,
.has-content.effect ~ .focus__border {
  width: 100%;
  transition: 0.4s;
}

.effect ~ label {
  position: absolute;
  left: 0;
  width: 100%;
  top: -1.3rem;
  color: #aaa;
  transition: 0.3s;
  z-index: -1;
  letter-spacing: 0.5px;
}

.effect:focus ~ label,
.has__content.effect ~ label {
  top: -1rem;
  font-size: 12px;
  color: indigo;
  transition: 0.3s;
}
</style>
