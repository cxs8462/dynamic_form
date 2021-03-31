<template>
  <el-rate
    :value="data.value"
    @input="(e) => $emit('input', e)"
    :disabled="data.disabled"
    :texts="data.texts"
    :allow-half="data.allowHalf"
    show-text
  >
  </el-rate>
</template>

<script>
export default {
  name: "item_rate",
  props: {
    data: {
      default: {},
    },
  },
};
</script>

<style scoped></style>
