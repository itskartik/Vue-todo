<template>
  <div class="Add">
    <form action="" @submit.prevent="submittodo(newTodo)" class="Aform">
      <input type="text" class="AddInput form-control" v-model="newTodo" />
    </form>
    <button class="AddBtn btn btn-primary" @click="submittodo(newTodo)">
      Add
    </button>
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
    submittodo(newTodo) {
      this.addTodo(newTodo);
      this.newTodo = "";
    },
  },
};
</script>
<style>
.Add {
  width: 100%;
  padding: 0;
  margin-bottom: 50px;
  display: inline-flex;
  justify-content: center;
}
.AddInput {
  width: 500px;
  font-size: 40px;
  padding: 0;
  margin: 0;
  height: 50px;
}
.AddBtn {
  height: 50px;
  width: 70px;

  padding: 0;
  margin: 0;
  margin-left: 10px;
}
</style>
