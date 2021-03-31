<template>
  <el-time-picker
    :value="data.value"
    :placeholder="data.placeholder"
    :readonly="data.readonly"
    @input="(e) => $emit('input', e)"
    :disabled="data.disabled"
  >
  </el-time-picker>
</template>

<script>
export default {
  name: "item_time",
  props: {
    data: {
      default: {},
    },
  },
};
</script>

<style scoped></style>
