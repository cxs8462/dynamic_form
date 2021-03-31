<template>
  <el-slider
    :value="data.value"
    :min="data.min"
    :show-stops="data.showStops"
    @input="(e) => $emit('input', e)"
    :step="data.step"
    :disabled="data.disabled"
  ></el-slider>
</template>

<script>
export default {
  name: "item_slider",
  props: {
    data: {
      default: {},
    },
  },
};
</script>

<style scoped></style>
