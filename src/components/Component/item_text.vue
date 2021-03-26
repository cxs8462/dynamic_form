<template>
  <el-input
    :value="value"
    :placeholder="placeholder"
    @input="(e) => $emit('input', e)"
    :prefix-icon="icon"
    :type="type"
    :readonly="readonly"
    :disabled="disabled"
    :clearable="clearable"
  >
    <template v-if="prepend" slot="prepend">{{ prepend }}</template>
    <template v-if="append" slot="append">{{ append }}</template>
  </el-input>
</template>

<script>
export default {
  name: "Item_input",
  props: {
    value: {
      default: "",
    },
    icon: {
      default: "",
    },
    prepend: {
      default: "",
    },
    append: {
      default: "",
    },
    placeholder: {
      default: "",
    },
    type: {
      default: "text",
    },
    readonly: {
      default: false,
    },
    disabled: {
      default: false,
    },
    clearable: {
      default: true,
    },
  },
};
</script>

<style scoped></style>
