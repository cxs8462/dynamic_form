<template>
  <div class="set_switch">
    <el-form-item label="默认值">
      <el-radio-group :value="data.value" @input="(i) => update('value', i)">
        <el-radio-button :label="true">是</el-radio-button>
        <el-radio-button :label="false">否</el-radio-button>
      </el-radio-group>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "set_switch",
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

<style lang="less" scoped>
.set_text {
}
</style>
