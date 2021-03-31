<template>
  <div class="componentList">
    <p
      class="listItem"
      v-for="(item, index) in list"
      :key="item.type + index"
      draggable="true"
      @dragstart="() => dragstart(item)"
    >
      {{ item.btnConfig.name }}
    </p>
  </div>
</template>

<script>
import { form_item_default } from "@/formconfig/form";
export default {
  name: "componentList",
  computed: {
    keyArr() {
      return Object.keys(form_item_default);
    },
    list() {
      return this.keyArr.reduce((total, item) => {
        total.push(form_item_default[item]);
        return total;
      }, []);
    },
  },
  methods: {
    dragstart(item) {
      this.$store.commit("form_item/setMoveItem", item);
    },
  },
};
</script>

<style lang="less" scoped>
.componentList {
  .listItem {
    padding: 7px;
    background-color: #ecf0f1;
    font-size: 13px;
    border: 3px dashed #909399;
    margin: 5px;
    display: inline-block;
    &:hover {
      color: #3498db;
      cursor: move;
      border-color: #3498db;
      border-style: dotted;
    }
  }
}
</style>
