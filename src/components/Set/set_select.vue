<template>
  <div class="set_select">
    <el-form-item label="提示文字">
      <el-input
        @input="(i) => update('placeholder', i)"
        :value="data.placeholder"
      />
    </el-form-item>
    <el-form-item label="默认值">
      <el-input
        @input="(i) => update('value', data.multiple ? i.split(',') : i)"
        :value="data.multiple ? data.value.join(',') : data.value"
      />
    </el-form-item>
    <el-form-item label="可以清空">
      <el-radio-group
        :value="data.clearable"
        @input="(i) => update('clearable', i)"
      >
        <el-radio-button :label="true">是</el-radio-button>
        <el-radio-button :label="false">否</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="多选">
      <el-radio-group :value="data.multiple" @input="(i) => updateMultiple(i)">
        <el-radio-button :label="true">是</el-radio-button>
        <el-radio-button :label="false">否</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <edit-list
      :data="data.options"
      @update="(value) => update('options', value)"
      >选项</edit-list
    >
  </div>
</template>

<script>
import EditList from "@/components/common/EditList";
export default {
  name: "set_select",
  components: { EditList },
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
    updateMultiple(value) {
      if (value) {
        this.$emit("updateField", "multiple", value);
        this.$emit("updateField", "value", []);
      } else {
        this.$emit("updateField", "multiple", value);
        this.$emit("updateField", "value", "");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.set_text {
}
</style>
