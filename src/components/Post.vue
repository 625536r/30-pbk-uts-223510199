<template>
  <div>
    <slot name="header"></slot>
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
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true
    },
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedUser: null,
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter((post) => post.userId === this.selectedUser);
    },
  },
};
</script>


