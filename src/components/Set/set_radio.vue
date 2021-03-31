<template>
  <div class="set_radio">
    <el-form-item label="默认值">
      <el-input @input="(i) => update('value', i)" :value="data.value" />
    </el-form-item>
    <el-form-item label="样式">
      <el-radio-group :value="data.button" @input="(i) => update('button', i)">
        <el-radio-button :label="true">按钮</el-radio-button>
        <el-radio-button :label="false">选项</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="边框" v-if="!data.button">
      <el-radio-group :value="data.border" @input="(i) => update('border', i)">
        <el-radio-button :label="true">有</el-radio-button>
        <el-radio-button :label="false">无</el-radio-button>
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
  name: "set_radio",
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
  },
};
</script>

<style lang="less" scoped>
.set_text {
}
</style>
