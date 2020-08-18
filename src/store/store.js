import Vue from "vue";
import Vuex from "vuex";
import todoApp from "./modules/todoApp";
// import * as getters from "./getters.js";
// import * as mutations from "./mutations.js";

// vue의 플러그인. 일반적으로 vue를 사용할 때 전역으로 특정 기능을 추가하고 싶을 때 global function
Vue.use(Vuex);

// const storage = {
//   fetch() {
//     const arr = [];
//     if (localStorage.length > 0) {
//       for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
//           arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//         }
//       }
//     }
//     return arr;
//   },
// };

export const store = new Vuex.Store({
  //   state: {
  //     todoItems: storage.fetch(),
  //   },
  //   getters: getters,
  //   mutations: mutations,
  modules: {
    todoApp,
  },
});
