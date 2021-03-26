<template>
  <el-input
    :value="value"
    :placeholder="placeholder"
    @input="(e) => $emit('input', e)"
    :prefix-icon="icon"
    :type="type"
    :readonly="readonly"
    :disabled="disabled"
    :rows="rows"
  >
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
    rows: {
      default: 3,
    },
  },
};
</script>

<style scoped></style>
