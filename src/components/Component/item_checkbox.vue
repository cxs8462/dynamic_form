<template>
  <el-checkbox-group
    v-if="data.button"
    :value="data.value"
    @input="(e) => $emit('input', e)"
    :min="data.min"
    :max="data.max"
  >
    <el-checkbox-button
      v-for="(item, index) in data.options"
      :key="item.value + index"
      :label="item.value"
      >{{ item.label }}</el-checkbox-button
    >
  </el-checkbox-group>
  <el-checkbox-group
    v-else
    :value="data.value"
    @input="(e) => $emit('input', e)"
    :disabled="data.disabled"
    :min="data.min"
    :max="data.max"
  >
    <el-checkbox
      v-for="(item, index) in data.options"
      :key="item.value + index"
      :label="item.value"
      :border="data.border"
      >{{ item.label }}</el-checkbox
    >
  </el-checkbox-group>
</template>

<script>
export default {
  name: "item_checkbox",
  props: {
    data: {
      default: {},
    },
  },
};
</script>

<style scoped></style>
