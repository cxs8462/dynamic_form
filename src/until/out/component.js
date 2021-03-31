const textInput = {
  type: "text",
  label: "标签名",
  disabled: false,
  readonly: false,
  value: "单行文本",
  fieldName: "字段名",
  placeholder: "请输入提示文字",
  rules: [],
  span: 24,
  labelWidth: 100,
  require: true,
  clearable: true,
  icon: "",
  prepend: "",
  append: "",
  btnConfig: {
    name: "单行文本",
  },
};

export const form = (data, template) => {
  return `
  <el-form 
  :model="from" 
  :rules="rules" 
  ref="from" 
  label-width="${data.labelWidth}"
  size="${data.size}"
  disabled="${data.disabled}"
  label-suffix="${data.labelSuffix}"
  inline="${data.inline}"
  label-position="${data.labelPosition}"
  >
  ${template}
  </el-form>
`;
};

export const col = (data, template) => {
  return `
  <el-col :span="${data.span}">
      <el-form-item
        label="${data.label}"
        label-width="${data.labelWidth} + 'px'"
        prop="${data.fieldName}"
      >
        ${template}
      </el-form-item>
  </el-col>
`;
};

export const text = (data) => {
  const prepend = data.prepend
    ? `<template slot="prepend">${data.prepend}</template>`
    : "";
  const append = data.append
    ? `<template slot="append">${data.append}</template>`
    : "";
  return `
  <el-input
    v-model="${data.fieldName}"
    placeholder="${data.placeholder}"
    prefix-icon="${data.icon}"
    type="text"
    readonly="${data.readonly}"
    disabled="${data.disabled}"
    clearable="${data.clearable}"
  >
  ${prepend}
  ${append}
  </el-input>
  `;
};
