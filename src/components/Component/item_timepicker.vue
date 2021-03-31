<template>
  <el-time-picker
    is-range
    arrow-control
    :value="data.value"
    :range-separator="data.rangeSeparator"
    :start-placeholder="data.startPlaceholder"
    :end-placeholder="data.endPlaceholder"
    :readonly="data.readonly"
    @input="(e) => $emit('input', e)"
    :disabled="data.disabled"
  >
  </el-time-picker>
</template>

<script>
export default {
  name: "item_timepicker",
  props: {
    data: {
      default: {},
    },
  },
};
</script>

<style scoped></style>
