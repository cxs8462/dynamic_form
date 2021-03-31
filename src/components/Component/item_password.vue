<template>
  <el-input
    :value="data.value"
    :placeholder="data.placeholder"
    @input="(e) => $emit('input', e)"
    :prefix-icon="data.icon"
    :type="data.type"
    :readonly="data.readonly"
    :disabled="data.disabled"
    :clearable="data.clearable"
  >
    <template v-if="data.prepend" slot="prepend">{{ data.prepend }}</template>
    <template v-if="data.append" slot="append">{{ data.append }}</template>
  </el-input>
</template>

<script>
export default {
  name: "Item_password",
  props: {
    data: {
      default: {},
    },
  },
};
</script>

<style scoped></style>
