<template>
  <div class="grid-container TodoContainer">
    <button
      v-if="!isEditing"
      class="grid-item toggle"
      v-bind:class="{ completed }"
      @click="$emit('on-toggle')"
    >
      {{ todoString }}
    </button>

    <form class="add" @submit.prevent="endEditing()" v-else>
      <input
        @blur="startEditing()"
        id="mainInput"
        type="text"
        class="grid-item"
        v-model="newTodoString"
      />
    </form>
    <button class="grid-item edit" @click="startEditing()">Edit</button>
    <button class="grid-item delete " @click="$emit('on-delete')">
      Delete
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todoString: String,
    completed: Boolean,
  },
  data() {
    return {
      newTodoString: "",
      isEditing: false,
    };
  },
  methods: {
    startEditing() {
      if (!this.isEditing) {
        this.newTodoString = this.todoString;
        this.isEditing = true;
      } else {
        this.endEditing();
      }
    },
    endEditing() {
      this.isEditing = false;
      this.$emit("on-edit", this.newTodoString);
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
