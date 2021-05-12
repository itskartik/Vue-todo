<template>
  <div class="grid-container TodoContainer">
    <button
      v-bind:class="{ completed }"
      v-if="!isEditing"
      @click="toggleTodo(index)"
    >
      {{ todo.todoString }}
    </button>

    <form class="add" v-else>
      <input
        id="mainInput"
        type="text"
        class="grid-item"
        v-model="newTodoString"
        @blur="startEdit()"
      />
    </form>
    <button class="grid-item edit" @click="startEdit()">Edit</button>
    <button class="grid-item delete" @click="todoDelete(todo)">Delete</button>
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
  grid-template-columns: 500px 70px 70px;
  grid-template-rows: 50px;
}
#mainInput {
  width: 499px;
  font-size: 40px;
  padding: 0;
  margin: 0;
}
.completed {
  text-decoration: line-through;
}
.toggle {
  border: none;
}
button {
  font-size: 20px;
}
</style>
