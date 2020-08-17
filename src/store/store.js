import Vue from "vue";
import Vuex from "vuex";

// vue의 플러그인. 일반적으로 vue를 사용할 때 전역으로 특정 기능을 추가하고 싶을 때 global function
Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; ++i) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    headerText: "TODO it!",
    todoItems: storage.fetch(),
  },
  mutations: {
    addOneItem(state, payload) {
      let todoItem = { completed: false, item: payload };
      localStorage.setItem(payload, JSON.stringify(todoItem));
      state.todoItems.push(todoItem);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1); // index에 1개의 요소를 지움
    },
    toggleOneItem(state, payload) {
      // todoItem.completed = !todoItem.completed; 내린 props 값을 다시 올려 받았기 때문에 안티 패턴이다
      state.todoItems[payload.index].completed = !state.todoItems[payload.index]
        .completed; // index로 접근하여 개선

      // localStorage를 갱신하는 부분
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(
        payload.todoItem.item,
        JSON.stringify(payload.todoItem)
      );
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
});
