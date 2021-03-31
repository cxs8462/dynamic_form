<template>
  <div class="set_upload">
    <el-form-item label="文件数量限制" label-width="100">
      <el-input-number @input="(i) => update('limit', i)" :value="data.limit" />
    </el-form-item>
    <el-form-item label="上传提示">
      <el-input @input="(i) => update('tip', i)" :value="data.tip" />
    </el-form-item>
    <el-form-item label="上传地址">
      <el-input @input="(i) => update('action', i)" :value="data.action" />
    </el-form-item>
    <el-form-item label="上传方式">
      <el-radio-group
        :value="data.autoUpload"
        @input="(i) => update('autoUpload', i)"
      >
        <el-radio-button :label="true">自动</el-radio-button>
        <el-radio-button :label="false">手动</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="列表类型">
      <el-radio-group
        :value="data.listType"
        @input="(i) => update('listType', i)"
      >
        <el-radio-button
          v-for="(item, index) in listTypeSelect"
          :key="item.value + index"
          :label="item.value"
          >{{ item.label }}</el-radio-button
        >
      </el-radio-group>
    </el-form-item>
  </div>
</template>

<script>
import { formSelect } from "@/formconfig/form";

export default {
  name: "set_upload",
  props: {
    data: {
      defalut: {},
    },
  },
  data() {
    return {
      listTypeSelect: formSelect.upload_listType,
    };
  },
  methods: {
    update(key, value) {
      this.$emit("updateField", key, value);
    },
  },
};
</script>

<style lang="less" scoped></style>
