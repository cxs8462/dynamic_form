<template>
  <el-color-picker
    :value="data.value"
    @input="(e) => $emit('input', e)"
    :disabled="data.disabled"
    :show-alpha="data.showAlpha"
  ></el-color-picker>
</template>

<script>
export default {
  name: "item_colorpicker",
  props: {
    data: {
      default: {},
    },
  },
};
</script>

<style scoped></style>
