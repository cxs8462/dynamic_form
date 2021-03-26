<template>
  <div class="iconSelect">
    <el-dialog :visible="visible" width="70%" center @close="close">
      <el-row class="box">
        <el-col
          :span="4"
          v-for="item in iconList"
          :key="item"
          class="select-item"
          @click.native="() => close(item)"
        >
          <el-col :span="24" align="center">
            <i class="icon" :class="item" />
          </el-col>
          <el-col :span="24" align="center">
            <p class="name">{{ item }}</p>
          </el-col>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { icon } from "@/until/icon";

export default {
  name: "IconSelect",
  props: {
    visible: {
      default: false,
    },
  },
  data() {
    return {
      iconList: icon,
    };
  },
  methods: {
    close(icon) {
      this.$emit("selected", false, icon ? icon : undefined);
    },
  },
};
</script>

<style lang="less" scoped>
.iconSelect {
  .box {
    height: 70vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .select-item {
    cursor: pointer;
    box-sizing: border-box;
    padding: 20px 10px;
    &:hover {
      background-color: #dfdfe2;
    }
  }
  .name {
    white-space: nowrap;
  }
  .icon {
    font-size: 50px;
  }
}
</style>
