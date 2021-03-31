<template>
  <div class="editList">
    <el-divider content-position="center">
      <slot />
    </el-divider>
    <el-row
      :gutter="10"
      v-for="(item, index) in data"
      :key="item.value + index"
      type="flex"
      align="middle"
      style="padding: 5px"
    >
      <el-col :span="3">key:</el-col>
      <el-col :span="7">
        <el-input
          clearable
          :value="item.label"
          @input="(e) => setValue(index, 'label', e)"
        />
      </el-col>
      <el-col :span="4">value:</el-col>
      <el-col :span="7">
        <el-input
          clearable
          :value="item.value"
          @input="(e) => setValue(index, 'value', e)"
        />
      </el-col>
      <el-col :span="3">
        <i class="el-icon-delete icon" @click="() => del(index)" />
      </el-col>
    </el-row>

    <el-divider
      ><el-button @click="add" type="text"
        ><i class="el-icon-document-add" />增加选项</el-button
      ></el-divider
    >
    <el-divider>End</el-divider>
  </div>
</template>

<script>
export default {
  name: "EditList",
  props: {
    data: {
      default: [],
    },
  },
  methods: {
    setValue(index, key, value) {
      const copy = JSON.parse(JSON.stringify(this.data));
      copy[index][key] = value;
      this.$emit("update", copy);
    },
    add() {
      const copy = JSON.parse(JSON.stringify(this.data));
      const length = copy.length + 1;
      copy.push({ label: `选项${length}`, value: length });
      this.$emit("update", copy);
    },
    del(index) {
      const copy = JSON.parse(JSON.stringify(this.data));
      copy.splice(index, 1);
      this.$emit("update", copy);
    },
  },
};
</script>

<style lang="less" scoped>
.editList {
  .icon {
    cursor: pointer;
    color: red;
    font-size: 20px;
    &:hover {
      color: #909399;
    }
  }
}
</style>
