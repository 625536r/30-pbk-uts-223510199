<template>
    <div>
      <slot name="header"></slot>
      <div class="input-container">
        <input v-model="newTask" @keyup.enter="addTask" placeholder="Tambahkan Kegiatan" />
        <button @click="addTask">Tambah</button>
      </div>
  
      <div class="filter-container">
        <label for="filterCompleted">Tampilkan Kegiatan yang belum selesai</label>
        <input type="checkbox" id="filterCompleted" v-model="localShowIncompleteOnly">
      </div>
  
      <table>
        <tbody>
          <tr v-for="(task, index) in filteredTasks" :key="task.id">
            <td>
              <span :class="{ completed: task.completed }" style="text-align: left;">
                {{ task.text }}
              </span>
            </td>
            <td>
              <input type="checkbox" v-model="task.completed">
            </td>
            <td>
              <button class="btn btn-primary btn-sm" @click="removeTask(index)">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <slot name="footer"></slot>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tasks: {
        type: Array,
        required: true
      },
      showIncompleteOnly: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        newTask: "",
        localTasks: this.tasks,
        localShowIncompleteOnly: this.showIncompleteOnly,
      };
    },
    computed: {
      sortedTasks() {
        return this.localTasks.sort((a, b) => a.completed - b.completed);
      },
      filteredTasks() {
        return this.localShowIncompleteOnly
          ? this.sortedTasks.filter((task) => !task.completed)
          : this.sortedTasks;
      },
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== "") {
          this.localTasks.push({ id: Date.now(), completed: false, text: this.newTask });
          this.newTask = "";
          this.$emit('update-tasks', this.localTasks);
        }
      },
      removeTask(index) {
        this.localTasks.splice(index, 1);
        this.$emit('update-tasks', this.localTasks);
      },
    },
  };
  </script>
  
 
  