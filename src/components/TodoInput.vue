<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addOneItem" />
        <span class="addContainer" v-on:click="addOneItem">
            <i class="fas fa-plus addBtn"></i>
        </span>

        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고!</h3>
            <div slot="body">해야 할 일을 등록하세요.</div>
            <div slot="footer">
                <i class="fas fa-times closeNodalBtn" v-on:click="showModal = false"></i>
            </div>
        </Modal>
    </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
    name: "TodoInput",
    data() {
        return {
            newTodoItem: "",
            showModal: false,
        };
    },
    methods: {
        addOneItem() {
            // 저장하는 로작
            if (this.newTodoItem !== "") {
                const item = this.newTodoItem.trim();
                this.$store.commit("addOneItem", item);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = "";
        },
    },
    components: {
        // Enhanced Object Literals
        Modal,
        // Modal: Modal,
    },
};
</script>

<style scoped>
input:focus {
    outline: none;
}

.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}

.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}

.addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}

.addBtn {
    color: white;
    vertical-align: middle;
}

.closeModalBtn {
    color: #42b983;
}
</style>