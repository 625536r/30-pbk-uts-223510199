<template>
  <div class="q-pa-none full-height">
    <div class="q-gutter-y-md column centered-content">
      <h4 class="header-spacing text-center ">TODO LIST</h4>
      <div class="row items-center q-gutter-none">
        <q-input
          color="dark"
          label-color="dark"
          outlined
          v-model="newTodo"
          @keyup.enter="addTodo"
          label="Add a new Todo"
          class="col"
        />
        <div class="lk">
          <q-btn color="black" @click="addTodo" label="Add" size="17px" class="col-auto" />
        </div>
      </div>

      <div class="q-pa-none" style="max-width: 350px">
        <div class="q-my-md">
          <q-toggle
            v-model="showIncomplete"
            checked-icon="check"
            color="red"
            left-label
            label="Show only incomplete"
            unchecked-icon="clear"
          />
        </div>
        <q-list bordered separator>
          <q-item v-for="(todo, index) in todos" :key="index">
            <q-item-section side top></q-item-section>
            <q-item-section>
              <q-item-label>
                <span :class="{ 'completed': todo.completed }">{{ todo.text }}</span>
              </q-item-label>
            </q-item-section>
            <q-checkbox
              v-model="todo.completed"
              @change="toggleTodoCompletion(realIndex(index))"
              checked-icon="task_alt"
              unchecked-icon="highlight_off"
            />
            <q-btn color="red" size="12px" @click="removeTodo(index)" label="delete" />
          </q-item>
        </q-list>
      </div>

      <div>
        Total Todos: {{ totalTodos }}
      </div>
    </div>
  </div>
</template>

<script>
import { useTodosStore } from '../store/todos';
import { ref, computed } from 'vue';

export default {
  name: 'Todos',
  setup() {
    const todosStore = useTodosStore();
    const newTodo = ref('');
    const showIncomplete = ref(false);

    const addTodo = () => {
      if (newTodo.value.trim() !== '') {
        todosStore.addTodo(newTodo.value);
        newTodo.value = '';
      }
    };

    const removeTodo = (index) => {
      todosStore.removeTodo(index, showIncomplete.value);
    };

    const toggleTodoCompletion = (index) => {
      const realIndex = showIncomplete.value
        ? todosStore.todos.findIndex(
            (todo) => todo === todosStore.filteredTodos(showIncomplete.value)[index]
          )
        : index;
      todosStore.toggleTodoCompletion(realIndex);
    };

    const todos = computed(() => todosStore.filteredTodos(showIncomplete.value));
    const totalTodos = computed(() => todosStore.totalTodos);

    return {
      newTodo,
      todos,
      showIncomplete,
      addTodo,
      removeTodo,
      toggleTodoCompletion,
      totalTodos,
    };
  },
};
</script>

<style scoped>
.full-height {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.centered-content {
  max-width: 400px;
  width: 100%;
}

.header-spacing {
  margin-bottom: 20px; 
  margin-top: 50px; 
}

.completed {
  text-decoration: line-through;
  color: #000000;
}

.lk {
  margin-left: 5px;
}
</style>
