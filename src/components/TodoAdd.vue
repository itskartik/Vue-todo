<template>
  <div class="Add">
    <form action="" class="Aform">
      <input type="text" class="AddInput" v-model="newTodo" />
    </form>
    <button class="AddBtn" @click="addTodo(newTodo)">Add</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
  },
};
</script>
<style>
.Add {
  width: 600px;
  padding: 0;
  margin-bottom: 50px;
  display: inline-flex;
}
.AddInput {
  width: 500px;
  font-size: 40px;
  padding: 0;
  margin: 0;
}
.AddBtn {
  height: 50px;
  width: 70px;
}
</style>
