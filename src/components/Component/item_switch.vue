<template>
  <el-switch
    :value="data.value"
    @input="(e) => $emit('input', e)"
    :disabled="data.disabled"
  >
  </el-switch>
</template>

<script>
export default {
  name: "item_switch",
  props: {
    data: {
      default: {},
    },
  },
};
</script>

<style scoped></style>
