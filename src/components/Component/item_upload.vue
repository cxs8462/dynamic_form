<template>
  <el-upload
    :action="data.action"
    multiple
    :limit="data.limit"
    :file-list="data.value"
    disabled
    :list-type="data.listType"
  >
    <el-button v-if="data.listType === 'text'" size="small" type="primary"
      >点击上传</el-button
    >
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    <div slot="tip" v-if="data.tip" class="el-upload__tip">{{ data.tip }}</div>
  </el-upload>
</template>

<script>
export default {
  name: "item_upload",
  props: {
    data: {
      default: {},
    },
  },
};
</script>

<style scoped></style>
