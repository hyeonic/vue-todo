<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="clearAllitem">Clear All</span>
    </div>
</template>

<script>
export default {
    name: "TodoFooter",
    methods: {
        clearAllitem: function () {
            this.$emit("clearAllitem");
        },
    },
};
</script>

<style scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
}

.clearAllBtn {
    color: #e20303;
    display: block;
}

.clearAllBtn:hover {
    background: linear-gradient(to right, #6478fb, #8763fb);
    color: white;
    border-radius: 5px 5px 5px 5px;
}
</style>