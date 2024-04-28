<template>
  <div class="app">
    <h1>List Kegiatan</h1>
    <div class="input-container">
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Tambahkan Kegiatan" />
      <button @click="addTask">Tambah</button>
    </div>
   
    <div class="filter-container">
      <label for="filterCompleted">Tampilkan Kegiatan yang belum selesai</label>
      <input type="checkbox" id="filterCompleted" v-model="showIncompleteOnly">
    </div>
  
        <tr v-for="(task, index) in filteredTasks" :key="task.id">
          
        <th>
          <td>
            <span :class="{ completed: task.completed }" style="text-align: left;">
              {{ task.text }}
            </span>
          </td>
          </th>
        
          <tr>
            <th>
            
            <input type="checkbox" v-model="task.completed" >
            </th>
          <td>
        <button class="btn btn-primary btn-sm" @click="removeTask(index)">Hapus</button>
      </td>
    </tr>
        </tr>

  </div>
</template>
<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: [
        { id: 1, completed: false, text: "Belajar" },
        { id: 2, completed: false, text: "Tugas UTS" },
      ],
      showIncompleteOnly: false,
    };
  },
  computed: {
    sortedTasks() {
      return this.tasks.sort((a, b) => a.completed - b.completed);
    },
    filteredTasks() {
      return this.showIncompleteOnly
        ? this.sortedTasks.filter((task) => !task.completed)
        : this.sortedTasks;
    },
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push({ id: Date.now(), completed: false, text: this.newTask });
        this.newTask = "";
      }
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>
 

