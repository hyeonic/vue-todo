const addOneItem = (state, payload) => {
  let todoItem = { completed: false, item: payload };
  localStorage.setItem(payload, JSON.stringify(todoItem));
  state.todoItems.push(todoItem);
};

const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item);
  state.todoItems.splice(payload.index, 1); // index에 1개의 요소를 지움
};

const toggleOneItem = (state, payload) => {
  // todoItem.completed = !todoItem.completed; 내린 props 값을 다시 올려 받았기 때문에 안티 패턴이다
  state.todoItems[payload.index].completed = !state.todoItems[payload.index]
    .completed; // index로 접근하여 개선

  // localStorage를 갱신하는 부분
  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
};

const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };
