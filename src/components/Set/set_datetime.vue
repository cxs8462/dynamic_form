<template>
  <div class="set_datetime">
    <el-form-item label="日期">
      <el-date-picker @input="(i) => update('value', i)" :value="data.value" />
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
  name: "set_datetime",
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
