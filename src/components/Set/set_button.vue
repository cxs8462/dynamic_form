<template>
  <div class="set_button">
    <el-form-item label="按钮文字">
      <el-input
        @input="(i) => update('set', { ...data.set, label: i })"
        :value="data.set.label"
      />
    </el-form-item>
    <el-form-item label="按钮样式">
      <el-radio-group
        :value="data.set.style"
        @input="(i) => update('set', { ...data.set, style: i })"
      >
        <el-radio-button
          v-for="(item, index) in styleSelect"
          :key="item.value + index"
          :label="item.value"
          >{{ item.label }}</el-radio-button
        >
      </el-radio-group>
    </el-form-item>
    <el-form-item label="按钮类型">
      <el-select
        :value="data.set.type"
        @input="(i) => update('set', { ...data.set, type: i })"
      >
        <el-option
          v-for="(item, index) in typeSelect"
          :key="item.value + index"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="图标">
      <el-input
        placeholder="图标"
        :value="data.set.icon"
        class="input-with-select"
      >
        <el-button
          slot="prepend"
          @click="() => update('set', { ...data.set, icon: '' })"
          icon="el-icon-delete"
          >清空</el-button
        >
        <el-button slot="append" @click="iconSelct = true" icon="el-icon-edit"
          >选择</el-button
        >
      </el-input>
    </el-form-item>
    <icon-select :visible="iconSelct" @selected="selected" />
  </div>
</template>

<script>
import { formSelect } from "@/formconfig/form";
import IconSelect from "@/components/IconSelect";

export default {
  name: "set_button",
  components: { IconSelect },
  props: {
    data: {
      defalut: {},
    },
  },
  data() {
    return {
      typeSelect: formSelect.buttonType,
      styleSelect: formSelect.buttonStyle,
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
        this.update("set", { ...this.data.set, icon });
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
