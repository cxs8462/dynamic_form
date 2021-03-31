export default {
  namespaced: true,
  state: {
    labelPosition: "right",
    labelWidth: 100,
    disabled: false,
    size: "medium ",
    labelSuffix: "",
    inline: false,
  },
  mutations: {
    setFormField(state, { key, value }) {
      state[key] = value;
    },
  },
  actions: {},
};
