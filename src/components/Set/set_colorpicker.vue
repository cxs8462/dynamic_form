<template>
  <div class="set_colorpicker">
    <el-form-item label="默认值">
      <el-color-picker @input="(i) => update('value', i)" :value="data.value" />
    </el-form-item>
    <el-form-item label="透明度选择" label-width="100">
      <el-radio-group
        :value="data.showAlpha"
        @input="(i) => update('showAlpha', i)"
      >
        <el-radio-button :label="true">支持</el-radio-button>
        <el-radio-button :label="false">不支持</el-radio-button>
      </el-radio-group>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "set_colorpicker",
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
