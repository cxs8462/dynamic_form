<template>
  <el-date-picker
    :value="data.value"
    :range-separator="data.rangeSeparator"
    :start-placeholder="data.startPlaceholder"
    :end-placeholder="data.endPlaceholder"
    type="datetimerange"
    :readonly="data.readonly"
    @input="(e) => $emit('input', e)"
    :disabled="data.disabled"
  >
  </el-date-picker>
</template>

<script>
export default {
  name: "item_datetimepicker",
  props: {
    data: {
      default: {},
    },
  },
};
</script>

<style scoped></style>
