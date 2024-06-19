import { defineStore } from 'pinia';

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [],
  }),
  getters: {
    filteredTodos: (state) => (showIncomplete) => {
      if (showIncomplete) {
        return state.todos.filter((todo) => !todo.completed);
      } else {
        return state.todos;
      }
    },
    totalTodos: (state) => state.todos.length,
  },
  actions: {
    addTodo(text) {
      if (text.trim() !== '') {
        this.todos.push({ text, completed: false });
      }
    },
    removeTodo(index, showIncomplete) {
      if (showIncomplete) {
        const incompleteTodos = this.todos.filter((todo) => !todo.completed);
        const todoToRemove = incompleteTodos[index];
        const realIndex = this.todos.indexOf(todoToRemove);
        this.todos.splice(realIndex, 1);
      } else {
        this.todos.splice(index, 1);
      }
    },
    toggleTodoCompletion(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
  },
});
