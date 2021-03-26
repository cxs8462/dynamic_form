export const formSelect = {
  labelPositionSelect: [
    { label: "左对齐", value: "left" },
    { label: "右对齐", value: "right" },
    { label: "居上", value: "top" },
  ],
  formSize: [
    { label: "mini", value: "mini" },
    { label: "小", value: "small " },
    { label: "正常", value: "medium " },
  ],
};

export const form_item_default = {
  textInput: {
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
  },
  textarea: {
    type: "textarea",
    rows: 3,
    label: "标签名",
    disabled: false,
    readonly: false,
    value: "多行文本",
    fieldName: "字段名",
    placeholder: "请输入提示文字",
    rules: [],
    span: 24,
    labelWidth: 100,
    require: true,
    icon: "",
    btnConfig: {
      name: "多行文本",
    },
  },
};
