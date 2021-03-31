<template>
  <div class="set_time">
    <el-form-item label="默认值">
      <el-time-picker @input="(i) => update('value', i)" :value="data.value" />
    </el-form-item>
    <el-form-item label="只读">
      <el-radio-group
        :value="data.readonly"
        @input="(i) => update('readonly', i)"
      >
        <el-radio-button :label="true">只读</el-radio-button>
        <el-radio-button :label="false">可编辑</el-radio-button>
      </el-radio-group>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "set_time",
  props: {
    data: {
      defalut: {},
    },
  },
  methods: {
    update(key, value) {
      this.$emit("updateField", key, value);
    },
  },
};
</script>

<style lang="less" scoped></style>
