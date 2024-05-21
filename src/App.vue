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
      <Todos />
    </div>

    <div v-else-if="activeTab === 'Post'">
      <Post />
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
      activeTab: 'Todos'
    };
  }
};
</script>

<style>
/* Add any global styles here */
</style>
