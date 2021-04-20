<template>
  <div class="container">
    <div><h1>My Todo</h1></div>
    <div class="NewTodo">
      <NewTodo @on-addTodo="addTodo($event)" />
    </div>
    <div class="todoList" style="">
      <Todo
        v-for="(todo, index) in todos"
        :key="index"
        :todoString="todo.todoString"
        :completed="todo.completed"
        @on-toggle="toggleTodo(todo)"
        @on-edit="todoEdit(todo, $event)"
        @on-delete="deleteTodo(todo)"
      />
    </div>
    <h5>Click on Todo to Mark it done</h5>
  </div>
</template>

<script>
import Todo from "./Todo";
import NewTodo from "./NewTodo";
export default {
  name: "TodoList",
  components: {
    Todo,
    NewTodo,
  },
  data() {
    return {
      todos: [
        { todoString: "1st Todo", completed: false },
        { todoString: "2nd Todo", completed: false },
        { todoString: "3rd Todo", completed: false },
        { todoString: "4th Todo", completed: false },
      ],
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({
        todoString: newTodo,
        completed: false,
      });
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    todoEdit(todo, newTodoS) {
      todo.todoString = newTodoS;
    },
    deleteTodo(deleteTodo) {
      this.todos = this.todos.filter(
        (todo) => todo.todoString !== deleteTodo.todoString
      );
    },
  },
};
</script>
<style>
.container {
  height: 500px;
  width: 250pxz;
}
</style>
