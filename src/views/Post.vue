<template>
  <div>
    <h1>POST</h1>
    <div class="nj">
      <q-btn-dropdown
        id="userFilter"
        color="dark"
        label="User"
        dropdown-icon="change_history"
      >
        <q-list>
          <q-item
            clickable
            v-close-popup
            @click="selectUser('')"
          >
            <q-item-section>
              All Users
            </q-item-section>
          </q-item>
          <q-item
            v-for="user in users"
            :key="user.id"
            clickable
            v-close-popup
            @click="selectUser(user.id)"
          >
            <q-item-section>
              {{ user.name }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>

    <div class="content-container">
      <div class="spinner-container" v-if="loading">
        <q-spinner-ios color="dark" size="3em" />
        <q-tooltip :offset="[0, 8]">Loading...</q-tooltip>
      </div>
      <q-list v-else bordered separator>
        <q-item clickable v-for="post in filteredPosts" :key="post.id">
          <q-item-section>
            <q-item-section header>{{ post.title }}</q-item-section>
            <q-item-label caption>{{ post.body }}</q-item-label>
            <q-item-label overline>
              <p><strong>User: {{ getUser(post.userId).name }}</strong></p>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import { usePostsStore } from '../store/posts';
import { ref, computed, onMounted } from 'vue';

export default {
  name: 'Post',
  setup() {
    const postsStore = usePostsStore();
    const selectedUser = ref('');

    onMounted(() => {
      postsStore.fetchUsers();
    });

    const selectUser = (userId) => {
      selectedUser.value = userId;
      applyFilter();
    };

    const applyFilter = () => {
      postsStore.applyFilter(selectedUser.value);
    };

    return {
      selectedUser,
      users: computed(() => postsStore.users),
      posts: computed(() => postsStore.posts),
      filteredPosts: computed(() => postsStore.filteredPosts),
      loading: computed(() => postsStore.loading),
      applyFilter,
      getUser: postsStore.getUser,
      selectUser
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 2em;
  text-align: center;
  margin-top: -5px;
  margin-bottom: -10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 1em;
}

label {
  margin-right: 0.5em;
}

select {
  padding: 0.5em;
  font-size: 1em;
}

.nj {
  text-align: center;
}

.content-container {
  position: relative;
  min-height: 400px;
}

.spinner-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
