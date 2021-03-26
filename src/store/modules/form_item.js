export default {
  namespaced: true,
  state: {
    list: [],
    select: undefined,
    moveItem: undefined,
  },
  mutations: {
    addList(state, item) {
      state.list.push(JSON.parse(JSON.stringify(item)));
      state.select = state.list.length - 1;
    },
    delList(state) {
      state.list.splice(state.select, 1);
      state.select = undefined;
    },
    clearList(state) {
      state.list = [];
      state.select = undefined;
    },
    moveTop(state) {
      const copy = state.list[state.select];
      state.list[state.select] = state.list[state.select - 1];
      state.list[state.select - 1] = copy;
      state.select--;
    },
    moveBotton(state) {
      const copy = state.list[state.select];
      state.list[state.select] = state.list[state.select + 1];
      state.list[state.select + 1] = copy;
      state.select++;
    },
    update(state, { index, key, value }) {
      state.list[index][key] = value;
    },
    setSelect(state, index) {
      state.select = index;
    },
    setMoveItem(state, item) {
      state.moveItem = item;
    },
  },
  actions: {},
};
