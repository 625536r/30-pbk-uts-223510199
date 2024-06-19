import { createRouter, createWebHistory } from 'vue-router';

const Todos = () => import('../views/Todos.vue');
const Album = () => import('../views/Album.vue');
const AlbumDetail = () => import('../views/AlbumDetail.vue');
const Post = () => import('../views/Post.vue');

const routes = [
  { path: '/', component: Todos },
  { path: '/post', component: Post },
  { path: '/album', component: Album },
  { path: '/albums/:id', component: AlbumDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
