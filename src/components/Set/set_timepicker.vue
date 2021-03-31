<template>
  <div class="set_timepicker">
    <el-form-item label="开始时间">
      <el-time-picker @input="(i) => upTime(0, i)" :value="data.value[0]" />
    </el-form-item>
    <el-form-item label="结束时间">
      <el-time-picker @input="(i) => upTime(1, i)" :value="data.value[1]" />
    </el-form-item>
    <el-form-item label-width="100px" label="开始提示文字">
      <el-input
        @input="(i) => update('startPlaceholder', i)"
        :value="data.startPlaceholder"
      />
    </el-form-item>
    <el-form-item label-width="100px" label="结束提示文字">
      <el-input
        @input="(i) => update('endPlaceholder', i)"
        :value="data.endPlaceholder"
      />
    </el-form-item>
    <el-form-item label-width="100px" label="范围分割文字">
      <el-input
        @input="(i) => update('rangeSeparator', i)"
        :value="data.rangeSeparator"
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
  name: "set_timepicker",
  props: {
    data: {
      defalut: {},
    },
  },
  methods: {
    update(key, value) {
      this.$emit("updateField", key, value);
    },
    upTime(index, value) {
      const arr = JSON.parse(JSON.stringify(this.data.value));
      arr[index] = value;
      this.$emit("updateField", "value", arr);
    },
  },
};
</script>

<style lang="less" scoped></style>
