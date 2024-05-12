<template>
  <div class="app">
    <!-- Header dengan menu Post dan Todos -->
    <header>
      <nav>
        <ul>
          <li @click="activeTab = 'Todos'" :class="{ active: activeTab === 'Todos' }">Todos</li>
          <li @click="activeTab = 'Post'" :class="{ active: activeTab === 'Post' }">Post</li>
        </ul>
      </nav>
    </header>

    <!-- Tampilan berdasarkan tab yang aktif -->
    <div v-if="activeTab === 'Todos'">
      <h1>List Kegiatan</h1>
      <div class="input-container">
        <input v-model="newTask" @keyup.enter="addTask" placeholder="Tambahkan Kegiatan" />
      </div>
      <button @click="addTask">Tambah</button>
     
      <div class="filter-container">
        <label for="filterCompleted">Tampilkan Kegiatan yang belum selesai</label>
        <input type="checkbox" id="filterCompleted" v-model="showIncompleteOnly">
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
    </div>

    <div v-else-if="activeTab === 'Post'">
      <h1>Fitur Post</h1>
      <!-- Tampilan postingan dari user -->
      <h3>Pilih User</h3>
      <select v-model="selectedUser">
        <option v-for="user in users" :value="user.id" :key="user.id">{{ user.name }}</option>
      </select>
      <div class="post-list">
        <div v-for="post in filteredPosts" :key="post.id" class="post-item">
          <h4>{{ post.title }}</h4>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
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
      activeTab: 'Todos', // Menentukan tab yang aktif
      users: [], // Data pengguna dari JSONPlaceholder
      selectedUser: null, // ID pengguna yang dipilih
      posts: [], // Data postingan dari JSONPlaceholder
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
    filteredPosts() {
      return this.posts.filter((post) => post.userId === this.selectedUser);
    },
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push({ id: Date.now(), completed: false, text: this.newTask });
        this.newTask = "";
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    fetchData() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          this.users = data;
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          this.posts = data;
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>


