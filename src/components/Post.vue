<template>
  <div>
    <h1>Fitur Post </h1>
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
</template>

<script>
export default {
  data() {
    return {
      users: [],
      selectedUser: null,
      posts: [],
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter((post) => post.userId === this.selectedUser);
    },
  },
  methods: {
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

<style scoped>
/* Add any styles specific to the Post component here */
</style>
