<template>
  <el-button
    :type="data.set.type"
    :plain="data.set.style === 'plain'"
    :round="data.set.style === 'round'"
    :circle="isCircle"
    :icon="data.set.icon"
    >{{ isCircle ? "" : data.set.label }}</el-button
  >
</template>

<script>
export default {
  name: "item_button",
  computed: {
    isCircle() {
      return this.data.set.style === "circle";
    },
  },
  props: {
    data: {
      default: {},
    },
  },
};
</script>

<style scoped></style>
