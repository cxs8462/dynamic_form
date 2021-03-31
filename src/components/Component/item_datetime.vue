<template>
  <el-date-picker
    :value="data.value"
    :placeholder="data.placeholder"
    :readonly="data.readonly"
    @input="(e) => $emit('input', e)"
    :disabled="data.disabled"
  >
  </el-date-picker>
</template>

<script>
export default {
  name: "item_datetime",
  props: {
    data: {
      default: {},
    },
  },
};
</script>

<style scoped></style>
