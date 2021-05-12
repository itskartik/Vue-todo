import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { todoString: "1st Todo", completed: true },
      { todoString: "2nd Todo", completed: false },
      { todoString: "3rd Todo", completed: false },
      { todoString: "4th Todo", completed: false },
    ],
  },
  mutations: {
    addTodo(state, data) {
      state.todos.push({
        todoString: data,
        completed: false,
      });
    },
    toggleTodo(state, index) {
      state.todos[index].completed = !state.todos[index].completed;
    },
    todoEdit(state, data) {
      state.todos[data.index].todoString = data.newTodoString;
    },
    todoDelete(state, todo) {
      var todos = state.todos;
      state.todos.splice(todos.indexOf(todo), 1);
    },
  },
  actions: {
    addTodo({ commit }, data) {
      commit("addTodo", data);
    },
    toggleTodo({ commit }, index) {
      commit("toggleTodo", index);
    },
    todoEdit({ commit }, data) {
      commit("todoEdit", data);
    },
    todoDelete({ commit }, todo) {
      commit("todoDelete", todo);
    },
  },
  getters: {
    getAllTodos: (state) => {
      return state.todos;
    },
  },
});
