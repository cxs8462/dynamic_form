<template>
  <el-input-number
    :value="data.value"
    @input="(e) => $emit('input', e)"
    :disabled="data.disabled"
    :step="data.step"
    :min="data.min"
    :max="data.max"
    :precision="data.precision"
  >
  </el-input-number>
</template>

<script>
export default {
  name: "Item_number",
  props: {
    data: {
      default: {},
    },
  },
};
</script>

<style scoped></style>
