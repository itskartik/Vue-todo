<template>
  <div>
    <div class="container">
      <div><h1>My Todo</h1></div>
      <TodoAdd />
      <div class="todoList" style="">
        <Todo
          v-for="(todo, index) in getAllTodos"
          :key="index"
          :todo="todo"
          :index="index"
          :completed="todo.completed"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Todo from "./Todo";
import TodoAdd from "./TodoAdd";
export default {
  components: {
    Todo,
    TodoAdd,
  },
  computed: {
    ...mapGetters(["getAllTodos"]),
  },
};
</script>
<style></style>
