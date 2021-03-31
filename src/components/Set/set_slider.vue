<template>
  <div class="set_slider">
    <el-form-item label="默认值">
      <el-input-number
        :step="data.step"
        @input="(i) => update('value', i)"
        :value="data.value"
      />
    </el-form-item>
    <el-form-item label="最小值">
      <el-input-number @input="(i) => update('min', i)" :value="data.min" />
    </el-form-item>
    <el-form-item label="最大值">
      <el-input-number @input="(i) => update('max', i)" :value="data.max" />
    </el-form-item>
    <el-form-item label="步进">
      <el-input-number @input="(i) => update('step', i)" :value="data.step" />
    </el-form-item>
    <el-form-item label="显示断点">
      <el-radio-group
        :value="data.showStops"
        @input="(i) => update('showStops', i)"
      >
        <el-radio-button :label="true">显示</el-radio-button>
        <el-radio-button :label="false">不显示</el-radio-button>
      </el-radio-group>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "set_slider",
  props: {
    data: {
      defalut: {},
    },
  },
  data() {
    return {
      iconSelct: false,
    };
  },
  methods: {
    update(key, value) {
      this.$emit("updateField", key, value);
    },
  },
};
</script>

<style lang="less" scoped></style>
