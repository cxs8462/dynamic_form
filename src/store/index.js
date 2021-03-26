import Vue from "vue";
import Vuex from "vuex";
import form from "./modules/form";
import form_item from "./modules/form_item";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    form,
    form_item,
  },
});
