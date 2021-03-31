<template>
  <div class="setContent">
    <el-tabs type="card" v-model="tabs" stretch>
      <el-tab-pane label="表单配置" name="form">
        <el-form label-width="100px">
          <el-form-item label="标签位置">
            <el-radio-group
              :value="form.labelPosition"
              @input="(i) => updateFormField('labelPosition', i)"
            >
              <el-radio-button
                v-for="item in labelPosition"
                :key="item.value"
                :label="item.value"
                >{{ item.label }}</el-radio-button
              >
            </el-radio-group>
          </el-form-item>
          <el-form-item label="禁用表单">
            <el-radio-group
              :value="form.disabled"
              @input="(i) => updateFormField('disabled', i)"
            >
              <el-radio-button :label="true">是</el-radio-button>
              <el-radio-button :label="false">否</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="默认标签宽度">
            <el-input-number
              @input="(i) => updateFormField('labelWidth', i)"
              :value="form.labelWidth"
            />
          </el-form-item>
          <el-form-item label="表单大小">
            <el-radio-group
              :value="form.size"
              @input="(i) => updateFormField('size', i)"
            >
              <el-radio-button
                v-for="item in formSize"
                :key="item.value"
                :label="item.value"
                >{{ item.label }}</el-radio-button
              >
            </el-radio-group>
          </el-form-item>
          <el-form-item label="标签统一后缀">
            <el-input
              @input="(i) => updateFormField('labelSuffix', i)"
              :value="form.labelSuffix"
            />
          </el-form-item>
          <el-form-item label="行内模式">
            <el-radio-group
              :value="form.inline"
              @input="(i) => updateFormField('inline', i)"
            >
              <el-radio-button :label="true">行内</el-radio-button>
              <el-radio-button :label="false">块级</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane
        v-if="form_item.select !== undefined"
        label="表单项"
        name="form_item"
      >
        <el-divider content-position="center"> 操作 </el-divider>
        <el-row>
          <el-col align="center" :span="6"
            ><el-button @click="cancel">取消</el-button></el-col
          >
          <el-col align="center" :span="6"
            ><el-button
              type="primary"
              :disabled="form_item.select === 0"
              @click="moveTop"
              >上移</el-button
            ></el-col
          >
          <el-col align="center" :span="6"
            ><el-button
              type="primary"
              :disabled="form_item.select === form_item.list.length - 1"
              @click="moveBotton"
              >下移</el-button
            ></el-col
          >
          <el-col align="center" :span="6"
            ><el-button type="danger" @click="delFormItem"
              >删除</el-button
            ></el-col
          >
        </el-row>
        <el-divider content-position="center"> 配置 </el-divider>
        <el-form
          style="margin-top: 10px"
          label-width="70px"
          label-position="left"
        >
          <el-form-item label="标签名">
            <el-input
              @input="(i) => updateField('label', i)"
              :value="item.label"
            />
          </el-form-item>
          <el-form-item label="字段名">
            <el-input
              @input="(i) => updateField('fieldName', i)"
              :value="item.fieldName"
            />
          </el-form-item>
          <el-form-item label="禁用">
            <el-radio-group
              :value="item.disabled"
              @input="(i) => updateField('disabled', i)"
            >
              <el-radio-button :label="true">是</el-radio-button>
              <el-radio-button :label="false">否</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="必填">
            <el-radio-group
              :value="item.require"
              @input="(i) => updateField('require', i)"
            >
              <el-radio-button :label="true">是</el-radio-button>
              <el-radio-button :label="false">否</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="栅格">
            <el-slider
              style="width: 90%"
              :value="item.span"
              @input="(i) => updateField('span', i)"
              :max="24"
              :min="1"
            ></el-slider>
          </el-form-item>
          <el-form-item label="标签宽度">
            <el-input-number
              @input="(i) => updateField('labelWidth', i)"
              :value="item.labelWidth"
            />
          </el-form-item>
          <component
            :is="`set_${item.type}`"
            :data="item"
            @updateField="updateField"
          />
          <regxp :data="item" @updateField="updateField" />
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { formSelect } from "@/formconfig/form";
import set_components from "@/until/set_components";
import Regxp from "@/components/common/Regxp";

export default {
  name: "SetContent",
  components: { Regxp, ...set_components },
  computed: {
    form() {
      return this.$store.state.form;
    },
    form_item() {
      return this.$store.state.form_item;
    },
    item() {
      return this.form_item.select !== undefined
        ? this.form_item.list[this.form_item.select]
        : { type: "empty" };
    },
  },
  watch: {
    "form_item.select": {
      handler(val) {
        if (val !== undefined) {
          this.tabs = "form_item";
        } else {
          this.tabs = "form";
        }
      },
    },
  },
  data() {
    return {
      tabs: "form",
      labelPosition: formSelect.labelPositionSelect,
      formSize: formSelect.formSize,
    };
  },
  methods: {
    cancel() {
      this.$store.commit("form_item/cancelSelect");
    },
    delFormItem() {
      this.$store.commit("form_item/delList");
    },
    moveTop() {
      this.$store.commit("form_item/moveTop");
    },
    moveBotton() {
      this.$store.commit("form_item/moveBotton");
    },
    updateField(key, value) {
      this.$store.commit("form_item/update", {
        index: this.form_item.select,
        key,
        value,
      });
    },
    updateFormField(key, value) {
      this.$store.commit("form/setFormField", { key, value });
    },
  },
};
</script>

<style lang="less" scoped>
.setContent {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
