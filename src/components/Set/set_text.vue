<template>
  <div class="set_text">
    <el-form-item label="提示文字">
      <el-input
        @input="(i) => update('placeholder', i)"
        :value="data.placeholder"
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
    <el-form-item label="图标">
      <el-input placeholder="图标" :value="data.icon" class="input-with-select">
        <el-button
          slot="prepend"
          @click="() => update('icon', '')"
          icon="el-icon-delete"
          >清空</el-button
        >
        <el-button slot="append" @click="iconSelct = true" icon="el-icon-edit"
          >选择</el-button
        >
      </el-input>
    </el-form-item>
    <el-form-item label="末尾文字">
      <el-input @input="(i) => update('append', i)" :value="data.append" />
    </el-form-item>
    <el-form-item label="头部文字">
      <el-input @input="(i) => update('prepend', i)" :value="data.prepend" />
    </el-form-item>
    <icon-select :visible="iconSelct" @selected="selected" />
  </div>
</template>

<script>
import IconSelect from "@/components/IconSelect";
export default {
  name: "set_text",
  components: { IconSelect },
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
