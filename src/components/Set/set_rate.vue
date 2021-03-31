<template>
  <div class="set_rate">
    <el-form-item label="评分">
      <el-input @input="(i) => update('value', i)" :value="data.value" />
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
    <el-form-item label="半颗星">
      <el-radio-group
        :value="data.allowHalf"
        @input="(i) => update('allowHalf', i)"
      >
        <el-radio-button :label="true">是</el-radio-button>
        <el-radio-button :label="false">否</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="文字提醒">
      <el-input
        @input="(i) => update('texts', i.split(','))"
        :value="data.texts.join(',')"
      />
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "set_rate",
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
