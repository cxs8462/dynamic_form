<template>
  <el-input
    :value="data.value"
    :placeholder="data.placeholder"
    @input="(e) => $emit('input', e)"
    :type="data.type"
    :readonly="data.readonly"
    :disabled="data.disabled"
    :rows="data.rows"
  >
  </el-input>
</template>

<script>
export default {
  name: "Item_input",
  props: {
    data: {
      default: {},
    },
  },
};
</script>

<style scoped></style>
