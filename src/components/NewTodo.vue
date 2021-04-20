<template>
  <div class="grid-container NewTodoContainer">
    <div class="grid-item Label">Add Todo</div>
    <form action="" @submit.prevent="addTodo()">
      <input class="grid-item" type="text" id="addTd" v-model="newTodo" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.length > 1) {
        this.$emit("on-addTodo", this.newTodo);
      }
      this.newTodo = "";
    },
  },
};
</script>

<style>
#addTd {
  padding: 0;
  margin: 0;
  width: 499px;
  font-size: 40px;
}
.NewTodoContainer {
  display: grid;
  grid-template-columns: 140px 500px;
}
.Label {
  display: flex;
  justify-content: center;
  padding-top: 5px;
  font-size: 30px;
}
</style>
