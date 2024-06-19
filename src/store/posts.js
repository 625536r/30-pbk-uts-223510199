import { defineStore } from 'pinia';
import axios from 'axios';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    users: [],
    loading: false,
    selectedUser: ''
  }),
  getters: {
    filteredPosts: (state) => {
      return state.posts;
    }
  },
  actions: {
    fetchUsers() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },
    applyFilter(userId) {
      this.loading = true;
      this.selectedUser = userId;
      setTimeout(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
          .then(response => {
            this.posts = response.data;
            this.loading = false;
          })
          .catch(error => {
            console.error('Error fetching posts:', error);
            this.loading = false;
          });
      }, 1000);
    },
    getUser(userId) {
      return this.users.find(user => user.id === userId) || {};
    }
  }
});
