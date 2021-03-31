<template>
  <div class="set_text">
    <el-form-item label="默认值">
      <el-input-number @input="(i) => update('value', i)" :value="data.value" />
    </el-form-item>
    <el-form-item label="最小值">
      <el-input-number @input="(i) => update('min', i)" :value="data.min" />
    </el-form-item>
    <el-form-item label="最大值">
      <el-input-number @input="(i) => update('max', i)" :value="data.max" />
    </el-form-item>
    <el-form-item label="步进">
      <el-input-number
        @input="(i) => update('step', i)"
        :precision="data.precision"
        :value="data.step"
      />
    </el-form-item>
    <el-form-item label="小数位数">
      <el-input-number
        @input="(i) => update('precision', i)"
        :value="data.precision"
      />
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "set_text",
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
    selected(iconSelct, icon) {
      this.iconSelct = iconSelct;
      if (icon) {
        this.update("icon", icon);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.set_text {
}
</style>
