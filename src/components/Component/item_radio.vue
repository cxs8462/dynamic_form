<template>
  <el-radio-group
    v-if="data.button"
    :value="data.value"
    @input="(e) => $emit('input', e)"
  >
    <el-radio-button
      v-for="(item, index) in data.options"
      :key="item.value + index"
      :label="item.value"
      >{{ item.label }}</el-radio-button
    >
  </el-radio-group>
  <el-radio-group
    v-else
    :value="data.value"
    @input="(e) => $emit('input', e)"
    :disabled="data.disabled"
  >
    <el-radio
      v-for="(item, index) in data.options"
      :key="item.value + index"
      :label="item.value"
      :border="data.border"
      >{{ item.label }}</el-radio
    >
  </el-radio-group>
</template>

<script>
export default {
  name: "item_radio",
  props: {
    data: {
      default: {},
    },
  },
};
</script>

<style scoped></style>
