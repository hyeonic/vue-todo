<template>
    <div id="app">
        <todo-header></todo-header>
        <!-- <todo-input v-on:addOneItem="addOneItem"></todo-input>
        <todo-list
            v-bind:todoItems="todoItems"
            v-on:removeOneItem="removeOneItem"
            v-on:toggleOneItem="toggleOneItem"
        ></todo-list>
        <todo-footer v-on:clearAllitem="clearAllitem"></todo-footer>-->
        <todo-input></todo-input>
        <todo-list></todo-list>
        <todo-footer></todo-footer>
    </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
    name: "App",
    // data() {
    //     return {
    //         todoItems: [],
    //     };
    // },
    methods: {
        // addOneItem(todoItem) {
        //     let obj = {
        //         completed: false,
        //         item: todoItem,
        //     };
        //     localStorage.setItem(todoItem, JSON.stringify(obj));
        //     this.todoItems.push(obj);
        // },
        // removeOneItem(todoItem, index) {
        //     localStorage.removeItem(todoItem.item);
        //     this.todoItems.splice(index, 1); // index에 1개의 요소를 지움
        // },
        // toggleOneItem(todoItem, index) {
        //     //todoItem.completed = !todoItem.completed; 내린 props 값을 다시 올려 받았기 때문에 안티 패턴이다
        //     this.todoItems[index].completed = !this.todoItems[index].completed; // index로 접근하여 개선
        //     // localStorage를 갱신하는 부분
        //     localStorage.removeItem(todoItem.item);
        //     localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        // },
        // clearAllitem() {
        //     localStorage.clear();
        //     this.todoItems = [];
        // },
    },
    // created() {
    //     if (localStorage.length > 0) {
    //         for (var i = 0; i < localStorage.length; i++) {
    //             if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
    //                 this.todoItems.push(
    //                     JSON.parse(localStorage.getItem(localStorage.key(i)))
    //                 );
    //             }
    //         }
    //     }
    // },
    components: {
        // 컴포넌트 태그명 : 컴포넌트 내용
        "todo-header": TodoHeader,
        "todo-input": TodoInput,
        "todo-list": TodoList,
        "todo-footer": TodoFooter,
        // Enhanced Object Literals
        // TodoHeader,
        // TodoInput,
        // TodoList,
        // TodoFooter,
    },
};
</script>

<style>
body {
    text-align: center;
    background-color: #f6f6f6;
}

input {
    border-style: groove;
    width: 80%;
}

button {
    border-style: groove;
}

.shadow {
    box-shadow: 5px 10px 5px rgba(0, 0, 0, 0.03);
}
</style>
