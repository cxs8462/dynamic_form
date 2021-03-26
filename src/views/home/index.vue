<template>
  <div class="home">
    <div class="title">
      <h2>表单快速构建工具</h2>
    </div>
    <el-row>
      <el-col :offset="18" :span="2">
        <el-button @click="download" type="text" icon="el-icon-download"
          >下载</el-button
        >
      </el-col>
      <el-col :span="2">
        <el-button @click="download" type="text" icon="el-icon-document-copy"
          >复制代码</el-button
        >
      </el-col>
      <el-col :span="2">
        <el-button @click="clear" type="text" icon="el-icon-delete"
          >清空</el-button
        >
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5">
        <div class="toolBox">
          <component-list />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="toolBox" @drop="ondrop" @dragover="ondragover">
          <content-main />
        </div>
      </el-col>
      <el-col :span="7">
        <div class="toolBox">
          <set-content />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ContentMain from "@/components/Content/ContentMain";
import ComponentList from "@/components/componentList/ComponentList";
import SetContent from "@/components/Content/SetContent";
export default {
  name: "home",
  components: { SetContent, ComponentList, ContentMain },
  computed: {
    form_item() {
      return this.$store.state.form_item;
    },
  },
  methods: {
    ondragover(e) {
      e.preventDefault();
    },
    ondrop(e) {
      e.preventDefault();
      console.log(e);
      if (this.form_item.moveItem) {
        this.$store.commit("form_item/addList", this.form_item.moveItem);
      }
      this.$store.commit("form_item/setMoveItem", undefined);
    },
    clear() {
      this.$store.commit("form_item/clearList");
    },
    //TODO
    download() {
      this.$message.warning("功能未开发！");
    },
  },
};
</script>

<style lang="less">
.home {
  height: 100%;
  .toolBox {
    height: 80vh;
    overflow-y: auto;
    border: 1px solid #d3d4d7;
    padding: 10px;
  }
  .title {
    height: 10vh;
    h2 {
      text-align: center;
    }
  }
}
</style>
