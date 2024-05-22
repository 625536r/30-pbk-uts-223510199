<template>
  <div class="app">
    <header>
      <nav>
        <ul>
          <li @click="activeTab = 'Todos'" :class="{ active: activeTab === 'Todos' }">Todos</li>
          <li @click="activeTab = 'Post'" :class="{ active: activeTab === 'Post' }">Post</li>
        </ul>
      </nav>
    </header>

    <div v-if="activeTab === 'Todos'">
      <Todos :tasks="tasks" :show-incomplete-only="showIncompleteOnly" @update-tasks="updateTasks">
        <template #header>
          <h1>Daftar Kegiatan</h1>
        </template>
        <template #footer>
          <p>Total Kegiatan: {{ tasks.length }}</p>
        </template>
      </Todos>
    </div>

    <div v-else-if="activeTab === 'Post'">
      <Post :users="users" :posts="posts">
        <template #header>
          <h1>Fitur Post</h1>
        </template>
        <template #footer>
          <p>Total Postingan: {{ posts.length }}</p>
        </template>
      </Post>
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue';
import Post from './components/Post.vue';

export default {
  components: {
    Todos,
    Post
  },
  data() {
    return {
      activeTab: 'Todos',
      tasks: [
        { id: 1, completed: false, text: "Belajar" },
        { id: 2, completed: false, text: "Tugas UTS" },
      ],
      showIncompleteOnly: false,
      users: [],
      posts: [],
    };
  },
  methods: {
    updateTasks(tasks) {
      this.tasks = tasks;
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


