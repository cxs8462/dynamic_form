<template>
  <div class="set_textarea">
    <el-form-item label="默认值">
      <el-input @input="(i) => update('value', i)" :value="data.value" />
    </el-form-item>
    <el-form-item label="最大行数">
      <el-input-number @input="(i) => update('rows', i)" :value="data.rows" />
    </el-form-item>
    <el-form-item label="提示文字">
      <el-input
        @input="(i) => update('placeholder', i)"
        :value="data.placeholder"
      />
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
  name: "set_textarea",
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
.set_textarea {
}
</style>
