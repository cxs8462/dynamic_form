<template>
  <div class="set_textarea">
    <el-form-item label="最大行数">
      <el-input-number @input="(i) => update('rows', i)" :value="data.rows" />
    </el-form-item>
    <el-form-item label="提示文字">
      <el-input
        @input="(i) => update('placeholder', i)"
        :value="data.placeholder"
      />
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
