<template>
  <div class="grid-container TodoContainer">
    <button
      v-bind:class="{ completed }"
      v-if="!isEditing"
      @click="toggleTodo(index)"
      class="btn btn-secondary"
    >
      {{ todo.todoString }}
    </button>

    <form class="add" @submit.prevent="startEdit()" v-else>
      <input
        id="mainInput"
        type="text"
        class="grid-item form-control"
        v-model="newTodoString"
      />
    </form>
    <button class="grid-item edit btn btn-success ml-2" @click="startEdit()">
      Edit
    </button>
    <button
      class="grid-item delete btn btn-danger ml-2"
      @click="todoDelete(todo)"
    >
      Delete
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      newTodoString: "",

      isEditing: false,
    };
  },
  props: {
    todo: Object,
    index: Number,
    completed: Boolean,
  },
  methods: {
    ...mapActions(["todoEdit", "toggleTodo", "todoDelete"]),
    startEdit() {
      if (!this.isEditing) {
        this.newTodoString = this.todo.todoString;
        this.isEditing = true;
      } else {
        this.endEditing();
      }
    },
    endEditing() {
      this.isEditing = false;
      var index = this.index;
      var newTodoString = this.newTodoString;
      this.todoEdit({ index, newTodoString });
    },
  },
};
</script>

<style>
.TodoContainer {
  display: grid;
  grid-template-columns: 350px 75px 75px;
  grid-template-rows: 40px;
  margin-bottom: 10px;
}
#mainInput {
  width: 349px;
  font-size: 30px;
  padding: 0;
  margin: 0;
  height: 40px;
}
.completed {
  text-decoration: line-through;
}
.toggle {
  border: none;
}
button {
  font-size: 15px;
}
</style>
