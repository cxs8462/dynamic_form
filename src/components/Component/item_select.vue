<template>
  <el-select
    :value="data.value"
    :placeholder="data.placeholder"
    @input="(e) => $emit('input', e)"
    :disabled="data.disabled"
    :clearable="data.clearable"
    :multiple="data.multiple"
  >
    <el-option
      v-for="(item, index) in data.options"
      :key="item.value + index"
      :label="item.label"
      :value="item.value"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  name: "Item_select",
  props: {
    data: {
      default: {},
    },
  },
};
</script>

<style scoped></style>
