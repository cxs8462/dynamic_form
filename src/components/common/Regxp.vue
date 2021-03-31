<template>
  <div class="regxp">
    <el-divider content-position="center"> 正则校验 </el-divider>
    <div class="content" v-if="data.rules && data.rules.length">
      <div
        class="item"
        v-for="(item, index) in data.rules"
        :key="item.reg + index"
      >
        <el-form-item label-width="90px" label="正则表达式">
          <el-input
            :value="item.reg"
            @input="(i) => upRule(index, 'reg', i)"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="90px" label="错误信息">
          <el-input
            :value="item.message"
            @input="(i) => upRule(index, 'message', i)"
          ></el-input>
        </el-form-item>
        <el-button
          class="close"
          type="danger"
          icon="el-icon-delete"
          circle
          size="mini"
          @click="() => del(index)"
        ></el-button>
      </div>
    </div>
    <div class="content">
      <el-button @click="add" type="text" icon="el-icon-circle-plus-outline"
        >添加规则</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Regxp",
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
    upRule(index, key, value) {
      const arr = JSON.parse(JSON.stringify(this.data.rules));
      arr[index][key] = value;
      this.$emit("updateField", "rules", arr);
    },
    add() {
      if (!this.data.rules) {
        this.$message.error("此组件不能添加正则验证！");
        return;
      }
      const arr = JSON.parse(JSON.stringify(this.data.rules));
      arr.push({ reg: "", message: "" });
      this.$emit("updateField", "rules", arr);
    },
    del(index) {
      const arr = JSON.parse(JSON.stringify(this.data.rules));
      arr.splice(index, 1);
      this.$emit("updateField", "rules", arr);
    },
  },
};
</script>

<style lang="less" scoped>
.regxp {
  .content {
    padding: 0 15px;
  }
  .item {
    margin-top: 10px;
    background: #f5f5f5;
    padding: 20px;
    position: relative;
  }
  .close {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(50%, -50%);
  }
}
</style>
