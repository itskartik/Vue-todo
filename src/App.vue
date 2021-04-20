<template>
  <div>
    <h1>WELCOME TO TODO</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style></style>
