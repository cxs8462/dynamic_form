<template>
  <el-form
    :model="form.formData"
    :rules="form.rules"
    :label-position="form.labelPosition"
    :label-width="form.labelWidth + 'px'"
    :disabled="form.disabled"
    :size="form.size"
    :label-suffix="form.labelSuffix"
    :inline="form.inline"
  >
    <el-col
      v-for="(item, index) in formItem.list"
      :span="item.span"
      :key="index + item.type"
      class="select"
      :class="{ selected: index === formItem.select }"
      @click.native="() => selectItem(index)"
      style="overflow: hidden"
    >
      <el-form-item
        :label="item.label"
        :label-width="item.labelWidth + 'px'"
        :required="item.require"
        class="formCenter"
      >
        <component
          :is="`item_${item.type}`"
          @input="(e) => update(e, index)"
          :data="item"
        ></component>
      </el-form-item>
    </el-col>
  </el-form>
</template>

<script>
import item_components from "@/until/item_components";
export default {
  name: "ContentMain",
  components: {
    ...item_components,
  },
  data() {
    return {};
  },
  computed: {
    form() {
      return this.$store.state.form;
    },
    formItem() {
      return this.$store.state.form_item;
    },
  },
  methods: {
    update(value, index) {
      this.$store.commit("form_item/update", { index, key: "value", value });
    },
    selectItem(index) {
      this.$store.commit("form_item/setSelect", index);
    },
  },
};
</script>

<style lang="less" scoped>
.select {
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 3px 1px #409eff;
  }
}
.formCenter {
  padding: 10px;
  margin: 3px;
}
.selected {
  box-shadow: 0px 0px 1px 1px #409eff;
  background-color: #ececec;
}
</style>
