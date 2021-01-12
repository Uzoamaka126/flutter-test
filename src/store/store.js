// import Vue from "vue";
import vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import state from './state'

const Vue = vue;

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  actions,
  mutations,
});

export default store;
